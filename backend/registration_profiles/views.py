from django.core.mail import send_mail
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from luna.settings import DEFAULT_FROM_EMAIL
from Users.models import User
from .models import RegistrationProfile
from .models import code_generator
from .serializers import RegistrationSerializer, ValidationSerializer


class RegistrationView(GenericAPIView):
    """
    post:
    Register a new user by asking for an email (send email validation code).
    """
    queryset = RegistrationProfile.objects.all()
    serializer_class = RegistrationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data["email"]

        registration, created = RegistrationProfile.objects.get_or_create(email=email)
        if not created:
            # if there is already a registration for this email, generate a new code
            registration.code = code_generator()
            registration.save()

        send_mail(
            'Validation Code',
            'Validation code: {}'.format(registration.code),
            DEFAULT_FROM_EMAIL,
            [registration.email],
            fail_silently=False,
        )
        return Response(status=status.HTTP_204_NO_CONTENT)


class ValidationView(GenericAPIView):
    """
    post:
    Validate a new registered user with a validation code sent by email.
    """
    queryset = RegistrationProfile.objects.all()
    serializer_class = ValidationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        registration = RegistrationProfile.objects.filter(
            email=serializer.validated_data["email"], code=serializer.validated_data["code"])
        if not registration:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if serializer.validated_data["password"] != serializer.validated_data["password_repeat"]:
            return Response("Password do not match", status=status.HTTP_400_BAD_REQUEST)

        User.objects.create_user(
            serializer.validated_data["username"],
            email=serializer.validated_data["email"],
            password=serializer.validated_data["password"],
            first_name=serializer.validated_data["first_name"],
            last_name=serializer.validated_data["last_name"])

        registration.delete()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

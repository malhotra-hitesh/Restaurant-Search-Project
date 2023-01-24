from django.core.mail import send_mail

from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from luna.settings import DEFAULT_FROM_EMAIL
from Users.models import User
from .models import PasswordReset
from .models import code_generator
from .serializers import PasswordResetSerializer, PasswordResetValidationSerializer


class PasswordResetView(GenericAPIView):
    """
    post:
    User should pass his email address and receive a validation code.
    """
    queryset = PasswordReset.objects.all()
    serializer_class = PasswordResetSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data["email"]

        reset, created = PasswordReset.objects.get_or_create(email=email)
        if not created:
            # if the is already a password reset request for this email, generate a new code
            reset.code = code_generator()
            reset.save()

        send_mail(
            'Password Reset Code',
            'Password Reset code: {}'.format(reset.code),
            DEFAULT_FROM_EMAIL,
            [reset.email],
            fail_silently=False,
        )
        return Response(status=status.HTTP_204_NO_CONTENT)


class PasswordResetValidationView(GenericAPIView):
    """
    post:
    Reset the user password - use the validation code to check that it’s the correct user.
    """
    queryset = PasswordReset.objects.all()
    serializer_class = PasswordResetValidationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        reset = PasswordReset.objects.filter(
            email=serializer.validated_data["email"], code=serializer.validated_data["code"])
        if not reset:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if serializer.validated_data["password"] != serializer.validated_data["password_repeat"]:
            return Response("Password do not match", status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.get(email=serializer.validated_data["email"])

        user.set_password(serializer.validated_data["password"])
        user.save()
        reset.delete()

        return Response(serializer.data, status=status.HTTP_200_OK)

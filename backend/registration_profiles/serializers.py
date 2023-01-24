from rest_framework import serializers
from rest_framework.serializers import ValidationError
from Users.models import User
from .models import RegistrationProfile


def email_does_not_exist(email):
    try:
        User.objects.get(email=email)
        raise ValidationError(detail='This email is taken')
    except User.DoesNotExist:
        return email


class RegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(label='Registration E-Mail Address', validators=[email_does_not_exist])

    class Meta:
        model = RegistrationProfile
        fields = ['code', 'email']
        read_only_fields = ['code']


class ValidationSerializer(serializers.ModelSerializer):
    code = serializers.CharField()
    password_repeat = serializers.CharField()

    class Meta:
        model = User
        fields = ['email', 'username', 'first_name', "last_name", "password", "password_repeat", "code"]

from rest_framework import serializers
from rest_framework.serializers import ValidationError
from Users.models import User
from .models import PasswordReset


def email_does_exist(email):
    try:
        User.objects.get(email=email)
        return email
    except User.DoesNotExist:
        raise ValidationError(detail='User does not exist!')


class PasswordResetSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(label='Registration E-Mail Address', validators=[email_does_exist])

    class Meta:
        model = PasswordReset
        fields = ['code', 'email']
        read_only_fields = ['code']


class PasswordResetValidationSerializer(serializers.ModelSerializer):
    code = serializers.CharField()
    email = serializers.EmailField(label='Registration E-Mail Address')
    password = serializers.CharField()
    password_repeat = serializers.CharField()

    class Meta:
        model = PasswordReset
        fields = '__all__'
        read_only_fields = ['code']

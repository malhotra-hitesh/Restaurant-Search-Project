from .models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id',
                  'email',
                  'username',
                  'first_name',
                  'last_name',
                  'location',
                  'phone',
                  'description',
                  'date_joined',
                  'profile_picture',
                  'reviews',
                  'restaurants'
                  ]

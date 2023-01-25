from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'location']

    first_name = models.CharField(verbose_name='first name', max_length=200, blank=True, default='unkown')
    last_name = models.CharField(verbose_name='last name', max_length=200, blank=True, default='unkown')
    email = models.EmailField(unique=True)
    location = models.CharField(verbose_name='user location', max_length=200)
    phone = models.CharField(verbose_name='phone', max_length=20, blank=True, null=True)
    description = models.CharField(verbose_name='user description', max_length=1000, blank=True, null=True)
    date_joined = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    profile_picture = models.ImageField(verbose_name='profile picture', max_length=255, blank=True)
    things_I_love = models.CharField(verbose_name='things_I_love', max_length=200, blank=True, null=True)


    def __str__(self):
        return self.username
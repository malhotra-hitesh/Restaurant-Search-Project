import random
from django.db import models


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class RegistrationProfile(models.Model):
    code = models.CharField(max_length=5, default=code_generator)
    email = models.EmailField(unique=True)

    def __str__(self):
        return f'code {self.code} for {self.email}'

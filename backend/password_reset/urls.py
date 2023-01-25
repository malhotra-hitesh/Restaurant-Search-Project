from django.urls import path

from .views import PasswordResetView, PasswordResetValidationView

urlpatterns = [
    path('', PasswordResetView.as_view()),
    path('validate/', PasswordResetValidationView.as_view()),
]

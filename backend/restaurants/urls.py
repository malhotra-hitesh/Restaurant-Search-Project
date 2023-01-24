from django.urls import path

from restaurants.views import ListCreateRestaurantView

urlpatterns = [
    path('', ListCreateRestaurantView.as_view()),
]

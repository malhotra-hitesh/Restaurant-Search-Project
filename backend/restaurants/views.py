from django.contrib.auth import get_user_model
from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from restaurants.models import Restaurant
from restaurants.serializers import RestaurantSerializer

User = get_user_model()


class ListCreateRestaurantView(ListCreateAPIView):
    """
    get:
    Lists all Restaurants.

    post:
    Creates a new Restaurant with logged-in user as owner.
    """

    serializer_class = RestaurantSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        query = self.request.GET.get('search', '')  # search is the params and '' the default value
        queryset = Restaurant.objects.filter(name__icontains=query)
        return queryset

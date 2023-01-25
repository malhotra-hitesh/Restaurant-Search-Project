from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from Users.serializers import UserSerializer
from restaurants.models import Restaurant
from restaurants.serializers import RestaurantSerializer
from reviews.models import Review
from reviews.serializers import ReviewSerializer

User = get_user_model()


class SearchView(ListAPIView):
    """
    get:
    Search for ‘restaurants’, ‘reviews’ or ‘users’. {type: ‘restaurants’, ‘search_string’: ‘Pub’}.
    """

    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        type = self.request.GET.get('type', '')

        if type == 'restaurants':
            return RestaurantSerializer
        elif type == 'reviews':
            return ReviewSerializer
        else:
            return UserSerializer

    def get_queryset(self):
        query = self.request.GET.get('search', '')  # search is the params and '' the default value
        type = self.request.GET.get('type', '')

        if type == 'restaurants':
            queryset = Restaurant.objects.filter(name__icontains=query)
            return queryset
        elif type == 'reviews':
            queryset = Review.objects.filter(content__icontains=query)
            return queryset
        elif type == 'users':
            queryset = User.objects.filter(Q(email__contains=query) |
                                           Q(username__contains=query) |
                                           Q(first_name__contains=query) |
                                           Q(last_name__contains=query))
            return queryset
        else:
            return []


class HomeView(ListAPIView):
    """
    get:
    Get a list of the four best rated restaurants for the home screen.
    """

    serializer_class = RestaurantSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Restaurant.objects.order_by('-rating_average')[:1]
        return queryset

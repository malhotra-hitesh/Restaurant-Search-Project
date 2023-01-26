from django.contrib.auth import get_user_model
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from restaurants.models import Restaurant
from restaurants.serializers import RestaurantSerializer

User = get_user_model()


class ListRestaurantView(ListAPIView):
    """
    get:
    Lists all Restaurants.
    """

    serializer_class = RestaurantSerializer
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        query = self.request.GET.get('search', '')  # search is the params and '' the default value
        queryset = Restaurant.objects.filter(name__icontains=query)
        return queryset


class CreateRestaurantView(CreateAPIView):
    """
    post:
    Creates a new Restaurant with logged-in user as owner.
    """

    serializer_class = RestaurantSerializer
    permission_classes = [IsAuthenticated]
    queryset = Restaurant.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ListCategoryRestaurantView(ListAPIView):
    """
    get:
    Lists all Restaurants by category.
    """

    serializer_class = RestaurantSerializer
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        query = self.request.parser_context.get('kwargs').get('category_id')
        queryset = Restaurant.objects.filter(category__icontains=query)
        return queryset


class ListUserRestaurantView(ListAPIView):
    """
    get:
    Lists all Restaurants created by a specific user.
    """

    serializer_class = RestaurantSerializer
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user_id = self.request.parser_context.get('kwargs').get('user_id')
        queryset = Restaurant.objects.filter(owner=user_id)
        return queryset


class RetrieveUpdateDeleteRestaurantView(RetrieveUpdateDestroyAPIView):
    """
        get:
        Retrieves a specific Restaurant by ID and displays all the information about that Restaurant.

        put:
        Updates a specific Restaurant (only allowed to Restaurant owner or admin).

        patch:
        Updates a specific Restaurant (only allowed to Restaurant owner or admin). It allows partial update.

        delete:
        Deletes a Restaurant by ID (only allowed to Restaurant owner or admin).

    """
    http_method_names = ['get', 'patch', 'delete']
    lookup_field = 'id'
    lookup_url_kwarg = 'restaurant_id'
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [IsAuthenticated]

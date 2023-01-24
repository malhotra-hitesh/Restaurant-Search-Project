from django.contrib.auth import get_user_model
from django.http import HttpResponse
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated

from restaurants.models import Restaurant
from reviews.models import Review
from reviews.serializers import ReviewSerializer

User = get_user_model()


class ListReviewView(ListAPIView):
    """
    get:
    Lists all Reviews.
    """

    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        query = self.request.GET.get('search', '')  # search is the params and '' the default value
        queryset = Review.objects.filter(content__icontains=query)
        return queryset


class CreateReviewView(CreateAPIView):
    """
    post:
    Creates a new Review with logged-in user as author.
    """

    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]
    queryset = Review.objects.all()

    def perform_create(self, serializer):
        restaurant_id = self.request.parser_context.get('kwargs').get('restaurant_id')
        restaurant = Restaurant.objects.get(id=restaurant_id)
        serializer.save(author=self.request.user, restaurant=restaurant)


# class ListCategoryRestaurantView(ListAPIView):
#     """
#     get:
#     Lists all Restaurants by category.
#     """
#
#     serializer_class = RestaurantSerializer
#     permission_classes = [IsAuthenticated]
#
#     def get_queryset(self):
#         query = self.request.parser_context.get('kwargs').get('category_id')
#         queryset = Restaurant.objects.filter(category__icontains=query)
#         return queryset


class ListRestaurantReviewView(ListAPIView):
    """
    get:
    Lists all Reviews for a single restaurant.
    """

    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        restaurant_id = self.request.parser_context.get('kwargs').get('restaurant_id')
        queryset = Review.objects.filter(restaurant=restaurant_id).order_by('-created')
        return queryset


class ListUserReviewView(ListAPIView):
    """
    get:
    Lists all Review created by a specific user in chronological order.
    """

    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user_id = self.request.parser_context.get('kwargs').get('user_id')
        queryset = Review.objects.filter(author=user_id).order_by('-created')
        return queryset


class RetrieveUpdateDeleteReviewView(RetrieveUpdateDestroyAPIView):
    """
        get:
        Retrieves a specific Review by ID and displays all the information about that Review.

        put:
        Updates a specific Review (only allowed to Review author or admin).

        patch:
        Updates a specific Review (only allowed to Review author or admin). It allows partial update.

        delete:
        Deletes a Review by ID (only allowed to Review author or admin).

    """
    http_method_names = ['get', 'patch', 'delete']

    lookup_field = 'id'
    lookup_url_kwarg = 'review_id'
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]


class ToggleReviewLikeView(GenericAPIView):
    """
    post:
    toggle like/unlike a specific Review.
    """
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        review = Review.objects.get(id=kwargs.get('review_id'))
        if review.liked_by.filter(email=request.user.email).exists():
            # review.liked_by.remove(request.user.id)
            return HttpResponse("User already likes this review", status=403)
        else:
            review.liked_by.add(request.user)
            return HttpResponse(status=204)



    def delete(self, request, *args, **kwargs):
        review = Review.objects.get(id=kwargs.get('review_id'))
        if review.liked_by.filter(email=request.user.email).exists():
            review.liked_by.remove(request.user.id)
            return HttpResponse(status=204)
        else:
            # review.liked_by.add(request.user)
            return HttpResponse("User does not like this review", status=403)


class ListLikedReviewView(ListAPIView):
    """
    get:
    Lists Reviews the logged-in user likes in chronological order.
    """
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user_id = self.request.user.id
        queryset = Review.objects.filter(liked_by=user_id).order_by('-created')

        return queryset

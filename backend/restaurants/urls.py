from django.urls import path

from restaurants.views import CreateRestaurantView, ListRestaurantView, ListCategoryRestaurantView, \
    ListUserRestaurantView, RetrieveUpdateDeleteRestaurantView

urlpatterns = [
    path('', ListRestaurantView.as_view()),
    path('<int:restaurant_id>/', RetrieveUpdateDeleteRestaurantView.as_view()),
    path('new/', CreateRestaurantView.as_view()),
    path('category/<int:category_id>/', ListCategoryRestaurantView.as_view()),
    path('user/<int:user_id>/', ListUserRestaurantView.as_view()),
]

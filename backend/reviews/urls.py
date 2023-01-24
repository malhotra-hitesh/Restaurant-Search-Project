from django.urls import path

from reviews.views import RetrieveUpdateDeleteReviewView, CreateReviewView, ListUserReviewView, ListReviewView, \
    ToggleReviewLikeView, ListLikedReviewView, ListRestaurantReviewView

urlpatterns = [
    path('', ListReviewView.as_view()),
    path('restaurant/<int:restaurant_id>/', ListRestaurantReviewView.as_view()),
    path('<int:review_id>/', RetrieveUpdateDeleteReviewView.as_view()),
    path('new/<int:restaurant_id>/', CreateReviewView.as_view()),
    path('like/<int:review_id>/', ToggleReviewLikeView.as_view()),
    path('likes/', ListLikedReviewView.as_view()),
    path('user/<int:user_id>/', ListUserReviewView.as_view()),
]

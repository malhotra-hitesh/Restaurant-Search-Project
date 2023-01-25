from django.urls import path
from Users.views import ListUserView, RetrieveUserView, LoggedInUserView

urlpatterns = [
    path('', ListUserView.as_view()),
    path('<int:user_id>/', RetrieveUserView.as_view()),
    path('me/', LoggedInUserView.as_view())

]

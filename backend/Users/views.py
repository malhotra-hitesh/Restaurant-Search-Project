from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from Users.serializers import UserSerializer

User = get_user_model()


class ListUserView(ListAPIView):
    """
    get:
    Lists all users.
    """
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        query = self.request.GET.get('search', '')  # search is the params and '' the default value
        queryset = User.objects.filter(Q(email__contains=query) |
                                       Q(username__contains=query) |
                                       Q(first_name__contains=query) |
                                       Q(last_name__contains=query))
        return queryset


class LoggedInUserView(RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


class RetrieveUserView(RetrieveAPIView):
    """
        get:
        Retrieves a specific Post by ID and displays all the information about that Post.

        put:
        Updates a specific Post (only allowed to Post author or admin).

        patch:
        Updates a specific Post (only allowed to Post owner or admin). It allows partial update.

        delete:
        Deletes a Post by ID (only allowed to Post owner or admin).

    """
    lookup_field = 'id'
    lookup_url_kwarg = 'user_id'
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

"""luna URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import os
from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework_simplejwt import views as jwt_views
from rest_framework import permissions

from luna.views import SearchView

schema_view = get_schema_view(
    openapi.Info(
        title="Luna API",
        default_version='v1',
        description="Luna backend project",
        # terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="lunagroup2project@gmail.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,  # Set to False to restrict access to protected endpoints
    permission_classes=[permissions.AllowAny, ],  # Permissions for docs access
    # permission_classes=[permissions.IsAuthenticated]
    url=os.environ.get('BASE_URL'),
)

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/api/auth/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/api/auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/api/auth/token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),
    path('backend/api/registration/', include('registration_profiles.urls')),
    path('backend/api/auth/password-reset/', include('password_reset.urls')),
    path('backend/api/users/', include('Users.urls')),
    path('backend/api/restaurants/', include('restaurants.urls')),
    path('backend/api/reviews/', include('reviews.urls')),
    path('backend/api/search/', SearchView.as_view()),
    # path('backend/api/home/', HomeView.as_view()),
    path('backend/api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]

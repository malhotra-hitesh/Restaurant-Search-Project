from rest_framework import serializers
from restaurants.models import Restaurant


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'
        # read_only_fields = ['author', 'like_count', 'shared_by', 'comments']

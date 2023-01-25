from rest_framework import serializers
from restaurants.models import Restaurant
from reviews.models import Review


class RestaurantSerializer(serializers.ModelSerializer):
    rating_average = serializers.SerializerMethodField()

    def get_rating_average(self, restaurant):
        reviews = Review.objects.filter(restaurant=restaurant.id)
        sum = 0
        count = 0
        for review in reviews:
            if review.rating == 0:
                continue
            else:
                sum = sum + review.rating
                count = count + 1

        if sum == 0:
            return 'unkown'
        else:
            return sum / count

    class Meta:
        model = Restaurant
        fields = '__all__'
        read_only_fields = ['owner', 'reviews', 'rating_average']

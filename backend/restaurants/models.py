from django.db import models
from luna import settings

CATEGORIES = (
        ('Fast food', 'FAST_FOOD'),
        ('Casual dining', 'CASUAL_DINING'),
        ('Fast Casual', 'FAST_CASUAL'),
        ('Contemporary', 'CONTEMPORARY'),
        ('Café', 'CAFE'),
        ('Pizzeria', 'PIZZERIA')
    )

PRICES = (
    (1, '$'),
    (2, '$$'),
    (3, '$$$')
)


class Restaurant(models.Model):
    name = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORIES, default='Casual dining')
    country = models.TextField()
    city = models.TextField()
    street = models.TextField()
    zip = models.IntegerField(blank=True, null=True)
    website = models.TextField(blank=True, null=True)
    phone = models.IntegerField()
    opening_hours = models.TextField()
    price = models.IntegerField(choices=PRICES, default=1)
    image = models.ImageField(max_length=255, blank=True)
    email = models.EmailField(unique=True)
    owner = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.PROTECT)

    def compute_rating_average(self):
        reviews = Restaurant.objects.filter(reviews_restaurant=self.id)
        sum = 0
        count = 0
        for review in reviews:
            if review.rating == 0:
                continue
            else:
                sum = sum + review.rating
                count = count +1

        if sum == 0:
            return 'unkown'
        else:
            return sum / count

    rating_average = models.IntegerField(blank=True, default=compute_rating_average())
    rating_average = models.IntegerField(blank=True, default=0)

    def __str__(self):
        return f'Restaurant {self.id}: {self.name}'

from django.db import models
from luna import settings

CATEGORIES = (
        (1, 'FAST_FOOD'),
        (2, 'CASUAL_DINING'),
        (3, 'FAST_CASUAL'),
        (4, 'CONTEMPORARY'),
        (5, 'CAFE'),
        (6, 'PIZZERIA')
    )

PRICES = (
    (1, '$'),
    (2, '$$'),
    (3, '$$$')
)


class Restaurant(models.Model):
    name = models.TextField()
    category = models.IntegerField(choices=CATEGORIES, default=2)
    country = models.TextField()
    city = models.TextField()
    street = models.TextField()
    zip = models.CharField(max_length=20, blank=True, null=True)
    website = models.TextField(blank=True, null=True)
    phone = models.CharField(max_length=255)
    email = models.EmailField(blank=True, null=True)
    opening_hours = models.TextField()
    price = models.IntegerField(choices=PRICES, blank=True, null=True)
    image = models.ImageField(max_length=255, blank=True)
    owner = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    # rating_average = models.IntegerField(blank=True, editable=False)

    # def save(self, *args, **kwargs):
    #     reviews = Restaurant.objects.filter(reviews__restaurant__id=self.id)
    #     sum = 0
    #     count = 0
    #     for review in reviews:
    #         if review.rating == 0:
    #             continue
    #         else:
    #             sum = sum + review.rating
    #             count = count + 1
    #
    #     if sum == 0:
    #         self.rating_average = 'unkown'
    #     else:
    #         self.rating_average = sum / count
    #     super(Restaurant, self).save(*args, **kwargs)

    def __str__(self):
        return f'Restaurant {self.id}: {self.name}'

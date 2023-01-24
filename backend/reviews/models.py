from django.db import models
from luna import settings
from restaurants.models import Restaurant

RATING = (
    (0, 'unknown'),
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5)
)


class Review(models.Model):
    content = models.TextField()
    rating = models.IntegerField(choices=RATING, default=0)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    liked_by = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='liked_reviews', blank=True)
    author = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.PROTECT, related_name='reviews')
    restaurant = models.ForeignKey(Restaurant, on_delete=models.PROTECT, related_name='reviews')

    def __str__(self):
        return f'Review {self.id}: {self.content}'

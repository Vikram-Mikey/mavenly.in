
# Create your models here using Django ORM
from django.db import models

class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=10)
    password = models.CharField(max_length=128)
    photo_url = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.username

class ProgramReview(models.Model):
    program = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    review = models.TextField()
    rating = models.IntegerField(choices=[(i, str(i)) for i in range(1, 6)])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.program} - {self.name} ({self.rating} stars)"

from django.db import models
import mongoengine
from mongoengine import Document, StringField, EmailField, FileField

# Create your models here.

class User(Document):
    username = StringField(required=True, unique=True)
    email = EmailField(required=True, unique=True)
    phone = StringField(required=True, min_length=10, max_length=10)
    password = StringField(required=True)
    photo_url = StringField()

from django.db import models

class ProgramReview(Document):
    program = StringField(required=True, max_length=100)
    name = StringField(required=True, max_length=100)
    review = StringField(required=True)
    rating = StringField(required=True, choices=["1", "2", "3", "4", "5"])
    created_at = StringField(required=True)

    def __str__(self):
        return f"{self.program} - {self.name} ({self.rating} stars)"

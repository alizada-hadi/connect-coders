from django.db import models
from accounts.models import User
# Create your models here.


class Programmer(models.Model):
    GENDER = (
        ("Male" , "Male"),
        ("Female" , "Female"),
    )
    user  = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    gender = models.CharField(max_length=20, choices=GENDER, default="Male")
    phone = models.CharField(max_length=20)
    address = models.TextField(null=True, blank=True)
    about = models.TextField(null=True, blank=True)
    # social accounts
    git = models.URLField(max_length=200)
    website = models.URLField(max_length=200, null=True, blank=True)
    avatar = models.ImageField(upload_to="users/avatar", default="user.jpg")


    def __str__(self):
        return self.first_name

from django.db import models
from accounts.models import User
from django.utils.text import slugify
import string
import random
# Create your models here.


def random_slug():
    return "".join(random.choice(string.ascii_letters + string.digits) for _ in range(10))


class Programmer(models.Model):
    user  = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    speciality = models.CharField(max_length = 200)
    gender = models.CharField(max_length=120)
    phone = models.CharField(max_length=20)
    address = models.TextField(null=True, blank=True)
    about = models.TextField(null=True, blank=True)
    slug = models.SlugField(max_length=200, unique=True)
    # social accounts
    git = models.URLField(max_length=200)
    twitter = models.URLField(max_length=200, null=True, blank=True)
    linkedIn = models.URLField(max_length=200, null=True, blank=True)
    website = models.URLField(max_length=200, null=True, blank=True)
    avatar = models.ImageField(upload_to="users/avatar", default="user.jpg")


    def __str__(self):
        return self.first_name

    def safe(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(random_slug() + "-" + self.user.username)


class Skill(models.Model):
    LEVEL = (
        ("Starter", "Starter"),
        ("Basic", "Basic"),
        ("Comfortable", "Comfortable"),
        ("Skillfull", "Skillfull"),
        ("Master", "Master"),
    )
    programmer = models.ForeignKey(Programmer, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    level_of_mastery = models.CharField(max_length=50, null=True, blank=True, choices=LEVEL)
    slug = models.SlugField(max_length=500, unique=True)

    def safe(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(random_slug() + "-" + self.title)
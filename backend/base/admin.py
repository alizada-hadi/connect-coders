from django.contrib import admin
from .models import Programmer, Skill
import random
import string
from django.utils.text import slugify

def random_slug():
    return "".join(random.choice(string.ascii_letters + string.digits) for _ in range(10))


admin.site.register(Programmer)
admin.site.register(Skill)
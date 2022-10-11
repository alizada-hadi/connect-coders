from django.contrib import admin
from .models import Programmer, Skill, Project

admin.site.register(Programmer)
admin.site.register(Skill)
admin.site.register(Project)
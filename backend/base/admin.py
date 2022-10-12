from django.contrib import admin
from .models import Programmer, Skill, Project, TechTools

admin.site.register(Programmer)
admin.site.register(Skill)
admin.site.register(Project)
admin.site.register(TechTools)
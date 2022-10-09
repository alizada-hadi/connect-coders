from django.urls import path
from . import views


urlpatterns = [
    path("programmer/profile/", views.programmer_profile, name="programmer_profile"),
    path("programmer/get/profile/", views.get_programmer_profile, name="programmer_get_profile"),
    path("programmers/", views.programmers, name="programmers"), 
    path("skill/create/", views.add_new_skill, name='new_skill')
]
from django.urls import path
from . import views


urlpatterns = [
    path("programmer/profile/", views.programmer_profile, name="programmer_profile"),
    path("programmer/get/profile/", views.get_programmer_profile, name="programmer_get_profile"),
]
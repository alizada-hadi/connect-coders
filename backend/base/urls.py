from django.urls import path
from . import views


urlpatterns = [
    path("programmer/profile/", views.programmer_profile, name="programmer_profile"),
    path("programmer/get/profile/", views.get_programmer_profile, name="programmer_get_profile"),
    path("programmers/", views.programmers, name="programmers"), 
    path("skill/create/", views.add_new_skill, name='new_skill'), 
    path("skill/<slug:slug>/", views.update_skill, name="skill_update"), 
    path('skill/<slug:slug>/delete/', views.delete_skill, name="skill_delete"), 

    # ? projects routes
    path("projects/", views.all_projects, name="all_projects"),
    path("project/create/", views.create_project, name="new_projects"),
]
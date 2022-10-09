from asyncore import read
from rest_framework import serializers
from .models import Programmer, Skill


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class ProgrammerSerializer(serializers.ModelSerializer):
    email = serializers.SerializerMethodField(read_only=True)
    skills = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Programmer
        fields = [
            'id', 
            'first_name',
            'last_name',
            'phone',
            'address',
            'git',
            'website', 
            'avatar', 
            'gender',  
            'about', 
            'speciality',
            'twitter',
            'linkedIn',
            'slug',
            'email', 
            'skills'
        ]

    def get_email(self, obj):
        return obj.user.email

    def get_skills(self, obj):
        skills = obj.skill_set.all()
        serializer = SkillSerializer(skills, many=True)
        return serializer.data


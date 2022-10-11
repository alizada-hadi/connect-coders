from asyncore import read
from rest_framework import serializers
from .models import Programmer, Project, Skill, TechTools, Comment, Vote


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class TeckToolsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechTools
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    techs = serializers.SerializerMethodField(read_only=True)
    comments = serializers.SerializerMethodField(read_only=True)
    votes = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Project
        fields = '__all__'

    def get_techs(self, obj):
        techs = obj.techtools_set.all()
        serializer = TeckToolsSerializer(techs, many=True)
        return serializer.data

    def get_comments(self, obj):
        comments = obj.comment_set.all()
        serializer = CommentSerializer(comments, many=True)
        return serializer.data

    def get_votes(self, obj):
        votes = obj.vote_set.all()
        serializer = VoteSerializer(votes, many=True)
        return serializer.data


class ProgrammerSerializer(serializers.ModelSerializer):
    email = serializers.SerializerMethodField(read_only=True)
    skills = serializers.SerializerMethodField(read_only=True)
    projects = serializers.SerializerMethodField(read_only=True)
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
            'skills', 
            'projects'
        ]

    def get_email(self, obj):
        return obj.user.email

    def get_skills(self, obj):
        skills = obj.skill_set.all()
        serializer = SkillSerializer(skills, many=True)
        return serializer.data

    def get_projects(self, obj):
        projects = obj.project_set.all()
        serializer  = ProjectSerializer(projects, many=True)
        return serializer.data


from rest_framework import serializers
from .models import Programmer




class ProgrammerSerializer(serializers.ModelSerializer):
    email = serializers.SerializerMethodField(read_only=True)
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
            'email'
        ]

    def get_email(self, obj):
        return obj.user.email


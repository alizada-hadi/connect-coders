from rest_framework import serializers
from .models import Programmer




class ProgrammerSerializer(serializers.ModelSerializer):
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
            'about'
        ]


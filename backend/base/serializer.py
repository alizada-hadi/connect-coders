from rest_framework import serializers
from .models import Programmer
from accounts.serializers import UserSerializer
from accounts.models import User



class ProgrammerSerializer(serializers.ModelSerializer):
    user = UserSerializer()
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
            'user', 
            'about'
        ]


from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from .models import Programmer
from .serializer import ProgrammerSerializer
from accounts.models import User


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_programmer_profile(request):
    user = request.user
    programmer = Programmer.objects.get(user=user)
    serializer = ProgrammerSerializer(programmer, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def programmer_profile(request):
    user = request.user
    data = request.data
    if Programmer.objects.filter(user=user).exists():
        programmer = Programmer.objects.get(user=user)
        programmer.first_name = data['first_name']
        programmer.last_name = data['last_name']
        programmer.phone = data['phone']
        programmer.gender = data["gender"], 
        programmer.address = data['address']
        programmer.about = data['about']
        programmer.git = data['git']
        programmer.website = data['website']
        programmer.avatar = request.FILES.get("avatar")
        programmer.save()
        serializer = ProgrammerSerializer(programmer, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        programmer = Programmer.objects.create(
            user=user,
            first_name=data['first_name'], 
            last_name=data['last_name'],
            gender = data["gender"], 
            phone = data['phone'], 
            address = data['address'],
            about = data['about'],
            git = data['git'], 
            website = data['website'],
            avatar = request.FILES.get("avatar")
        )

        serializer = ProgrammerSerializer(programmer, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)



@api_view(["GET"])
def programmers(request):
    programmers = Programmer.objects.all()
    serializer = ProgrammerSerializer(programmers, many=True)
    return Response(serializer.data)
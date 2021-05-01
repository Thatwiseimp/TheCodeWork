from django.shortcuts import render
from .serializers import ProfileSerializer,UserSerializerWithToken
from .models import Profile
from django.views import View
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import permissions,status
from rest_framework.response import Response

# Create your views here.
def profile(request):

    value = Profile.objects.all()
    my_serializer = ProfileSerializer(data=value, many=True)
    if my_serializer.is_valid():
        return JsonResponse(my_serializer.data, status=200)

    return JsonResponse(my_serializer.data, safe=False, status=200)

@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    
    serializer = ProfileSerializer(request.user)
    return Response(serializer.data)


class ProfileList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self,request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
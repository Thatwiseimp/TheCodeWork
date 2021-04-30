from django.shortcuts import render
from .serializers import ProfileSerializer
from .models import Profile
from django.views import View
from django.http import JsonResponse

# Create your views here.
def profile(request):

    value = Profile.objects.all()
    my_serializer = ProfileSerializer(data=value, many=True)
    if my_serializer.is_valid():
        return JsonResponse(my_serializer.data, status=200)

    return JsonResponse(my_serializer.data, safe=False, status=200)
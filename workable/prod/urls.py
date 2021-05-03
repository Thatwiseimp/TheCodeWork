from django.urls import path, include
from .views import ProfileList,profile

# from .views import people_list

urlpatterns =[
    path('profile/', profile),
    path('users/', ProfileList.as_view())
]

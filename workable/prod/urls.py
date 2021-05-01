from django.urls import path, include
from .views import current_user, ProfileList,profile

# from .views import people_list

urlpatterns =[
    path('profile/', profile,name='profile'),
    path('current_user/', current_user),
    path('users/', ProfileList.as_view())
]



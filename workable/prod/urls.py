from django.urls import path, include
from . import views

# from .views import people_list

urlpatterns =[
    path('', views.profile,name='profile')
]

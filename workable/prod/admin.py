from django.contrib import admin
from .models import Profile


class ProfileAdmin(admin.ModelAdmin):
    fields = ['name', 'email','phone_number']

admin.site.register(Profile, ProfileAdmin)
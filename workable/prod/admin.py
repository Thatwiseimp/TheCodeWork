from django.contrib import admin
from .models import Profile


class ProfileAdmin(admin.ModelAdmin):
    fields = ['name', 'emailaddress']

admin.site.register(Profile, ProfileAdmin)
from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator


class Profile(models.Model):
    username = models.CharField(max_length=50)
    email= models.EmailField(max_length=254)
    password =  models.CharField(max_length=40)
    # phone_number = models.PhoneNumberField(_(""))(max_length=10,unique=True)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$')
    phone_number = models.CharField(validators=[phone_regex], max_length=10, blank=False) 

    def __str__(self):
        return self.name
# Create your models here.

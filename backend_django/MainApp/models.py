from django.db import models
from django.db.models.fields import CharField

# Create your models here.
class Contact(models.Model):
    First_Name = models.CharField(max_length=30)
    Last_Name = models.CharField(max_length=30)

    class Meta:
        unique_together = (('First_Name', 'Last_Name'),)

    Profile_Pic = models.ImageField()

    Email = models.EmailField()
    Phone_Number = models.CharField(max_length=12)

    Company_Name = models.CharField(max_length=40)
    Address = models.CharField(max_length=200)
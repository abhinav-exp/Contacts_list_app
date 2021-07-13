from django.shortcuts import render, HttpResponse
from django.views import View
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Contact
from .serializers import ContactSerializer

# Create your views here.
class CRUD(APIView):
    def get(self, request, format=None):
        Contactq = Contact.objects.all()
        serializer = ContactSerializer(Contactq, many=True)
        return Response(serializer.data)
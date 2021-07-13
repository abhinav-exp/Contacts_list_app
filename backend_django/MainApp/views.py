from django.shortcuts import render, HttpResponse
from django.views import View
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Contact
from .serializers import ContactSerializer
from rest_framework import status

# Create your views here.
class CRUD(APIView):
    def get(self, request):
        Contactq = Contact.objects.all()
        serializer = ContactSerializer(Contactq, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # def delete(self, request, id):
    #     obj = Contact.objects.get(id = id)
    #     obj.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    
    # def pui(self, request, id):
    #     pass
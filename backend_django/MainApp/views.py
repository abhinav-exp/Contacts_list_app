from django.shortcuts import render, HttpResponse
from django.views import View
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Contact
from .serializers import ContactSerializer
from rest_framework import status

# Create your views here.
def Reactapp(request):
    return render(request, 'index.html')

class CRUD(APIView):
    def get(self, request):
        Contactq = Contact.objects.all()
        serializer = ContactSerializer(Contactq, many=True)
        r = Response(serializer.data)
        print(r.data)
        return r
    
    def post(self, request):
        print(request.FILES)
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(request.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CRUD_single(APIView):
    def get(self, request, id):
        try :
            Contactq = Contact.objects.get(id = id)
            serializer = ContactSerializer(Contactq)
            return Response(serializer.data)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        try :
            obj = Contact.objects.get(id = id)
            obj.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except :
            return Response(status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, id):
        obj = Contact.objects.get(id = id)
        serialized = ContactSerializer(obj)
        serialized.update(obj, request.data)
        return Response(serialized.data, status=status.HTTP_201_CREATED)
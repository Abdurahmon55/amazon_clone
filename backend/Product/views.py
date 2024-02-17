from django.shortcuts import render
from .serializer import *
from .models import *
from rest_framework.generics import *
from django_filters.rest_framework import DjangoFilterBackend
from django.contrib.auth.models import User
# Create your views here.

def GetObject (name, model, Views, serializer):
    class name(Views):
        queryset=model.objects.all()
        serializer_class=serializer
    return name    

class ProductViews(ListAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['Category']

class UserViews(ListAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['username']
    

ImageViews=GetObject('ImageViews', ProductImage, ListAPIView, ImgaSerializer)
ProductDetalViews=GetObject('ProductDetalViews', Product, RetrieveAPIView, ProductSerializer)
CatigoryViews=GetObject('CatigoryViews', Category, ListAPIView, CatigorySerializer)
CatigoryDetalViews=GetObject('CatigoryDetalViews', Category, RetrieveAPIView, CatigorySerializer)
NewsProductViews=GetObject('NewsProductViews', NewsProduct, RetrieveAPIView, NewsProductSerializer)
NewsProductFullViews=GetObject('NewsProductViews', NewsProduct, ListAPIView, NewsProductSerializer)
ShoperViews=GetObject('ShoperViews', Shoper, ListCreateAPIView, ShoperSerializer)
ShoperDetalViews=GetObject('ShoperDetalViews', Shoper, RetrieveUpdateDestroyAPIView, ShoperSerializer)



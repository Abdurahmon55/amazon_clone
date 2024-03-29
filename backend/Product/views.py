from django.shortcuts import render
from .serializer import *
from .models import *
from rest_framework.generics import *
from django_filters.rest_framework import DjangoFilterBackend
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import filters

# Create your views here.

def GetObject (name, model, Views, serializer):
    class name(Views):
        queryset=model.objects.all()
        serializer_class=serializer
    return name    


def filterItem (name, views, model, serializer, filter):
    class name(views):
        queryset=model.objects.all()
        serializer_class=serializer
        filter_backends = [DjangoFilterBackend, filters.SearchFilter]
        filterset_fields = [filter]
        search_fields=['name']
    return name 

class ProductViews(ListAPIView):
        queryset=Product.objects.all()
        serializer_class=ProductSerializer
        filter_backends = [DjangoFilterBackend, filters.SearchFilter]
        filterset_fields = ['Category']
        search_fields=['name', 'brand', 'star']

def addProductViews(name, views, permission, model, serializer):
    class name(views):
        queryset=model.objects.all()
        serializer_class=serializer
    return name        

ImageViews=GetObject('ImageViews', ProductImage, ListAPIView, ImgaSerializer)
ProductDetalViews=GetObject('ProductDetalViews', Product, RetrieveAPIView, ProductSerializer)
CatigoryDetalViews=GetObject('CatigoryDetalViews', Category, RetrieveAPIView, CatigorySerializer)
UserDetailViews=GetObject('UserViews',User, RetrieveAPIView,  UserSerializer)
NewsProductViews=GetObject('NewsProductViews', NewsProduct, RetrieveAPIView, NewsProductSerializer)
NewsProductFullViews=GetObject('NewsProductViews', NewsProduct, ListAPIView, NewsProductSerializer)
ShoperDetalViews=GetObject('ShoperDetalViews', Shoper, RetrieveUpdateDestroyAPIView, ShoperSerializer)
UserViews=filterItem('UserViews', ListAPIView, User, UserSerializer, 'username' )
ShoperViews=filterItem('ShoperViews', ListCreateAPIView, Shoper, ShoperSerializer, 'shoper' )
ProductAddViews=addProductViews('ProductAddViews', ListCreateAPIView, IsAuthenticatedOrReadOnly, Product, ProductSerializer)
ProductUpdeteViews=addProductViews('ProductUpdeteViews', RetrieveUpdateDestroyAPIView, IsAuthenticatedOrReadOnly, Product, ProductSerializer)
ImageAddViews=addProductViews('ImageAddViews', ListCreateAPIView, IsAuthenticatedOrReadOnly, ProductImage, ImgaSerializer )
CatigoryViews=filterItem('CatigoryViews', ListAPIView, Category, CatigorySerializer, 'name')


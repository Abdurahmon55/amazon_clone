from django.shortcuts import render
from .serializer import *
from .models import *
from rest_framework.generics import *
from django_filters.rest_framework import DjangoFilterBackend
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .permissions import isAuthOrReadOnly
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
        filter_backends = [DjangoFilterBackend]
        filterset_fields = [filter]
    return name 

class ProductAddViews(ListCreateAPIView):
    permission_classes =[IsAuthenticatedOrReadOnly]
    queryset=Product.objects.all()
    serializer_class=ProductSerializer

class ProductUpdeteViews(RetrieveUpdateDestroyAPIView):
    permission_classes =[IsAuthenticatedOrReadOnly]
    queryset=Product.objects.all()
    serializer_class=ProductSerializer

ImageViews=GetObject('ImageViews', ProductImage, ListAPIView, ImgaSerializer)
ProductDetalViews=GetObject('ProductDetalViews', Product, RetrieveAPIView, ProductSerializer)
CatigoryViews=GetObject('CatigoryViews', Category, ListAPIView, CatigorySerializer)
CatigoryDetalViews=GetObject('CatigoryDetalViews', Category, RetrieveAPIView, CatigorySerializer)
NewsProductViews=GetObject('NewsProductViews', NewsProduct, RetrieveAPIView, NewsProductSerializer)
NewsProductFullViews=GetObject('NewsProductViews', NewsProduct, ListAPIView, NewsProductSerializer)
ShoperDetalViews=GetObject('ShoperDetalViews', Shoper, RetrieveUpdateDestroyAPIView, ShoperSerializer)
UserViews=filterItem('UserViews', ListAPIView, User, UserSerializer, 'username' )
ProductViews=filterItem('ProductViews', ListAPIView, Product, ProductSerializer, 'Category')
ShoperViews=filterItem('ShoperViews', ListCreateAPIView, Shoper, ShoperSerializer, 'shoper' )



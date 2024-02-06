from django.shortcuts import render
from .serializer import *
from .models import *
from rest_framework.generics import *
# Create your views here.

def GetObject (name, model, Views, serializer):
    class name(Views):
        queryset=model.objects.all()
        serializer_class=serializer
    return name    

ProductViews=GetObject('ProductViews', Product, ListAPIView, ProductSerializer)
ImageViews=GetObject('ImageViews', ProductImage, ListAPIView, ImgaSerializer)
CatigoryViews=GetObject('CatigoryViews', Category, ListAPIView, CatigorySerializer)
CatigoryDetalViews=GetObject('CatigoryDetalViews', Category, RetrieveAPIView, CatigorySerializer)
NewsProductViews=GetObject('NewsProductViews', NewsProduct, RetrieveAPIView, NewsProductSerializer)
NewsProductFullViews=GetObject('NewsProductViews', NewsProduct, ListAPIView, NewsProductSerializer)


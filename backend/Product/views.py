from django.shortcuts import render
from .serializer import *
from .models import *
from rest_framework.generics import *
# Create your views here.
class ProductViews(ListAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializer

class ImageViews(ListAPIView):
    queryset=ProductImage.objects.all()
    serializer_class=ImgaSerializer

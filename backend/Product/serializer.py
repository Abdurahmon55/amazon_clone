from rest_framework.serializers import ModelSerializer
from .models import *

class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class ImgaSerializer(ModelSerializer):
    class Meta:
        model=ProductImage
        fields='__all__'
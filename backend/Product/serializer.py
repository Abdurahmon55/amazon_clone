from rest_framework.serializers import ModelSerializer
from .models import *

def Serializer(name, models, field):
    class name(ModelSerializer):
        class Meta:
            model=models
            fields=field
    return name  

CatigorySerializer=Serializer('CatigorySerializer', Category, '__all__')
ImgaSerializer=Serializer('ProductImage', ProductImage, '__all__')
NewsProductSerializer=Serializer('NewsProductSerializer', NewsProduct, '__all__')
ShoperSerializer=Serializer('ShoperSerializer', Shoper, '__all__')
class ProductSerializer(ModelSerializer):
    image=ImgaSerializer(many=True, read_only = True)
    class Meta:
        model=Product
        fields='__all__'

from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Profile(models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE)

class Category(models.Model):
    name=models.CharField(max_length=100)
    image=models.ImageField()

    def __str__(self):
        return self.name

class Product(models.Model):
    name=models.CharField(max_length=100)
    desc=models.TextField(blank=True)
    price=models.DecimalField(max_digits=10, decimal_places=2) 
    stock=models.PositiveIntegerField()
    data=models.DateTimeField(auto_now_add=True)
    brand=models.CharField(max_length=100, blank=True)
    star=models.PositiveIntegerField(blank=True)
    Category=models.ManyToManyField(Category, blank=True)
    user=models.ForeignKey(Profile, on_delete=models.CASCADE)

    def __str__(self) :
        return self.name

class ProductImage(models.Model):
    images=models.ImageField()
    product=models.ForeignKey(Product, on_delete=models.CASCADE, related_name='image')

class NewsProduct(models.Model):
    image=models.ImageField()
    name=models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.name
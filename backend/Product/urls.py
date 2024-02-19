from django.urls import path
from .views import *
urlpatterns = [
    path('product/views/', ProductViews.as_view()),
    path('product/views/<int:pk>/', ProductDetalViews.as_view()),
    path('image/views/', ImageViews.as_view()),
    path('product/catigory/', CatigoryViews.as_view()),
    path('product/catigory/<int:pk>/', CatigoryDetalViews.as_view()),
    path('product/news/<int:pk>/', NewsProductViews.as_view()),
    path('product/news/', NewsProductFullViews.as_view()),
    path('user/', UserViews.as_view()),
    path('shoper/', ShoperViews.as_view()),
    path('shoper/<int:pk>/', ShoperDetalViews.as_view()),
    path('product/add/', ProductAddViews.as_view()),
    path('product/add/<int:pk>/', ProductUpdeteViews.as_view())
]
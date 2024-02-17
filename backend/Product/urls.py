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
]
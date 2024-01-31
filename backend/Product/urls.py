from django.urls import path
from .views import *
urlpatterns = [
    path('product/views/', ProductViews.as_view()),
    path('image/views/', ImageViews.as_view(),)
]
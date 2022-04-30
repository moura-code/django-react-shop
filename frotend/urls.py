import re
from django.urls import path
from .views import *

urlpatterns = [
    path('register/',index),
    path('media/images/<str:imagen>',image),
    path('',index),
    path('login/',index)
]
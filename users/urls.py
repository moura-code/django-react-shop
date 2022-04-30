
from django.urls import path
from rest_framework.authtoken import views

from .views import *

urlpatterns = [
    path('', UserView.as_view()),
    path('me/<str:username>/', UserDetailApiView.as_view()),
    
    
]
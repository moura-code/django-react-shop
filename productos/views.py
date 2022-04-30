from webbrowser import get
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from core.models import Producto
# Create your views here.
from rest_framework import permissions
class ProductosView(APIView):
    
    permission_classes = [permissions.AllowAny]
    
    def get(self, request, format=None):
          
        queryset = Producto.objects.all()
        serializer = ProductosSerializer(queryset, context={"request": request}, many=True)
        return Response(serializer.data) 
    
class ProductoAddCart(APIView):
    
    permission_classes = [permissions.AllowAny]
    
    def post(self,request):
        pass



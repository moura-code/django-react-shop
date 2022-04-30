
from rest_framework import serializers
from core.models import Producto


class ProductosSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Producto
        fields = ["id","nombre","costo","imagen"]
    

    #This is the magic function which does the work
    def get_photo_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.fingerprint.url
        return request.build_absolute_uri(photo_url)
    
    



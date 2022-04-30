from rest_framework import serializers
from django.contrib.auth import get_user_model
class UserSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = get_user_model()
        fields = ['username','email','password','Entidad','DNI','Telefono','Direccion','Pedidos']
        extra_kwargs = {
            'password': {'write_only': True}
        }
        
    def create(self, validated_data):
        """Criar um novo usuario"""
        return get_user_model().objects.create_user(**validated_data)
        
    def update(self, instance, validated_data):
    
        user = super().update(instance, validated_data)
        senha = validated_data.pop('password')
        user.set_password(senha)
        user.save()
        return user

class AddProductsToUser(serializers.Serializer):
    productos = serializers.DictField(child=serializers.CharField())
    
    
    
    
    
   
    
    

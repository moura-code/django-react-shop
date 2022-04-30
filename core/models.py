from phonenumber_field.modelfields import PhoneNumberField
from django.db import models
from django.contrib.auth.models import AbstractUser


class Producto(models.Model):
    nombre = models.CharField(max_length=20, unique=True)
    costo = models.IntegerField()
    imagen = models.ImageField(upload_to='images/')
    descripcion =  models.CharField(max_length=100, default='')
    
    def __str__(self) -> str:
        return self.nombre
    

    
class User(AbstractUser):
    
    entidad = [
        ('Persona', 'Persona'),
        ('Empresa', 'Empresa'),
    ]
    Entidad = models.CharField(max_length=7,choices=entidad,default='Persona')
    DNI = models.IntegerField()
    Telefono =  PhoneNumberField( unique=True)
    Direccion =  models.CharField(max_length=50)
    Pedidos = models.ManyToManyField(Producto, related_name='pedidos',through="Count")
    Pedidos_no_entregados = models.ManyToManyField(Producto,related_name='pedidos_ya_entregados') 
    
    def __str__(self) -> str:
        return self.username
    


class Count(models.Model):
    User = models.ForeignKey(User, on_delete=models.CASCADE)
    Producto = models.ForeignKey(Producto, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.Producto}'
    
 
    
    
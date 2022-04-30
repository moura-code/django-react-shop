
# Register your models here.
from django.contrib import admin
from .models import *
from django.contrib.auth.models import Group

from django.contrib.auth.admin import UserAdmin


class TermInlineAdmin(admin.TabularInline):
    model = User.Pedidos.through
class MyUserAdmin(UserAdmin):


    fieldsets =  (
            (None, {'fields': ('email', 'password')}),
            ('Important dates', {'fields': ('last_login',)}),
        ) + (
            (None, {'fields': ('DNI','Telefono', "Direccion","Entidad")}),
    ) 
   
    inlines = (TermInlineAdmin,)

admin.site.register(Producto)
admin.site.unregister(Group)

admin.site.register(User, MyUserAdmin)
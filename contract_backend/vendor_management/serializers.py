from django.shortcuts import render
from rest_framework import serializers
from .models import VendorBasic
# Create your views here.

class VendorBasicSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = VendorBasic
        fields = '__all__'
from django.shortcuts import render
from rest_framework import serializers
from .models import VendorBasic,VendorTag,VendorTrade
# Create your views here.

class VendorTagSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = VendorTag
        fields = '__all__'

class VendorTradeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = VendorTrade
        fields = '__all__'

class VendorBasicSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = VendorBasic
        fields = '__all__'
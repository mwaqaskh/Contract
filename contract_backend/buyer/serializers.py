from django.shortcuts import render
from rest_framework import serializers
from .models import BuyerBasic
# Create your views here.

class BuyerBasicSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = BuyerBasic
        fields = '__all__'
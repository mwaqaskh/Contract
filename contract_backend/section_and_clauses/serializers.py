from rest_framework import serializers
from .models import DefaultSectionAndClauses, ContractSectionAndClauses

class DefaultSectionAndClausesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DefaultSectionAndClauses
        fields = '__all__'

class ContractSectionAndClausesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContractSectionAndClauses
        fields = '__all__'
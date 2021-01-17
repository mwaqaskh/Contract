from rest_framework import serializers
from .models import ContractBasic, Insurance

class InsuranceSerializer(serializers.ModelSerializer):
    #id = serializers.IntegerField(required=False, read_only=True)

    class Meta:
        model = Insurance
        fields = [
            
            'supplier_name',
            'contract_id',
            'insurance_company_name',
            'insurance_type', 
            'contract_insurance_expiry', 
            'insurance_status',     
            'insurance_history', 
        ]

class ContractBasicSerializer(serializers.ModelSerializer):
    contractrev = InsuranceSerializer(many=True, read_only=True)
    #tags = TagSerializer(many=True)

    class Meta:
        model = ContractBasic
        fields = '__all__'
        

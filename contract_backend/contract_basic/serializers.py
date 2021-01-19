from rest_framework import serializers
from .models import ContractBasic, Insurance,BusinessUnit,Department,Regions,Divisions,Sites,Tags

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



class ContractBasicListSerializer(serializers.ModelSerializer):
    contractrev = InsuranceSerializer(many=True, read_only=True)
    #tags = TagSerializer(many=True)

    class Meta:
        model = ContractBasic
        fields = '__all__'

        depth=1





class BusinessUnitSerializer(serializers.ModelSerializer):

    class Meta:
        model = BusinessUnit
        fields = '__all__'


class DepartmentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Department
        fields = '__all__'


class RegionsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Regions
        fields = '__all__'


class DivisionsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Divisions
        fields = '__all__'

class SitesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Sites
        fields = '__all__'

class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = '__all__'
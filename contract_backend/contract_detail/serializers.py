from rest_framework import serializers
from .models import ContractApprovalStatus, HistoryOfChanges, HistoryOfApprovalChanges, ESignature, Uploads

class ContractApprovalSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContractApprovalStatus
        fields = '__all__'

class HOCSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistoryOfChanges
        fields = '__all__'

class HistoryOfApprovalChangesSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistoryOfApprovalChanges
        fields = '__all__'

class ESignatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ESignature
        fields = '__all__'

class UploadsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Uploads
        fields = '__all__'
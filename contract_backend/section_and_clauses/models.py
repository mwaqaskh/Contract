from django.db import models
from django.utils import timezone
from user.models import User
from contract_basic.models import ContractBasic

# Create your models here.
class DefaultSectionAndClauses(models.Model):

    options = (
        ('default', 'default'),
        ('customized', 'customized'),
    )

    section_id = models.CharField( max_length=255)
    section_name = models.CharField( max_length=255) 
    clause_text = models.TextField()
    clause_creation_date = models.DateField(default=timezone.now) 
    clause_last_modified = models.DateField(null=True, blank=True)
    clause_creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="clause_creator_rev")
    modified_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="moderator_rev")
    clause_type = models.CharField(max_length=55, choices=options, default="default",)

    def __str__(self):
        return str(self.section_name)

class ContractSectionAndClauses(models.Model):
    contract_id = models.ForeignKey(ContractBasic, on_delete=models.CASCADE)
    section_id = models.CharField( max_length=255)
    section_name = models.CharField( max_length=255) 
    clause_text = models.TextField()
    contract_clause_creation_date = models.DateField(default=timezone.now) 
    contract_clause_last_modified = models.DateField(null=True, blank=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    legal_comments = models.CharField(max_length=255, null=True, blank=True)
    legally_reviewed_by = models.CharField(max_length=255, null=True, blank=True)
    legal_status = models.CharField(max_length=255, null=True, blank=True)
    supplier_comments = models.CharField(max_length=255, null=True, blank=True)
    supplier_reviewed_by = models.CharField(max_length=255, null=True, blank=True)
    supplier_status = models.CharField(max_length=255, null=True, blank=True)
    buyer_comments = models.CharField(max_length=255, null=True, blank=True)
    buyer_reviewed_by = models.CharField(max_length=255, null=True, blank=True)
    buyer_status = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return str(self.section_name)
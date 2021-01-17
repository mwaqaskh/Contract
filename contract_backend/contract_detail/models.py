from django.db import models
from user.models import User
from contract_basic.models import ContractBasic

# Create your models here.

class ContractApprovalStatus(models.Model):

    fat1_options = (
        ('pending', 'pending'),
        ('approved', 'approved'),
        ('rejected', 'rejected'),
    )

    fat2_options = (
        ('pending', 'pending'),
        ('approved', 'approved'),
        ('rejected', 'rejected'),
    )

    fat3_options = (
        ('pending', 'pending'),
        ('approved', 'approved'),
        ('rejected', 'rejected'),
    )
    
    contract_id = models.OneToOneField(ContractBasic, on_delete=models.CASCADE,)
    contract_approver = models.CharField( max_length=255)
    contract_approver_comments = models.CharField( max_length=255)
    contract_approver_status = models.CharField( max_length=255)
    FAT1_approver = models.ForeignKey(User, on_delete=models.CASCADE, related_name="fat1_rev")
    FAT1_required = models.BooleanField(default=True)
    FAT1_status = models.CharField( max_length=55, choices=fat1_options, default="pending",)
    FAT1_comments = models.CharField( max_length=255)
    FAT2_approver = models.ForeignKey(User, on_delete=models.CASCADE, related_name="fat2_rev")
    FAT2_required = models.BooleanField(default=True)
    FAT2_status = models.CharField( max_length=55, choices=fat2_options, default="pending",)
    FAT2_comments = models.CharField( max_length=255)
    FAT3_approver = models.ForeignKey(User, on_delete=models.CASCADE, related_name="fat3_rev")
    FAT3_required = models.BooleanField(default=True)
    FAT3_status = models.CharField( max_length=55, choices=fat3_options, default="pending",)
    FAT3_comments = models.CharField( max_length=255)

    def __str__(self):
        return str(self.contract_approver)

class HistoryOfChanges(models.Model):
    contract_id = models.ForeignKey(ContractBasic, on_delete=models.CASCADE)
    modified_coulmn_name = models.CharField( max_length=255)
    prevalue = models.CharField( max_length=255)
    post_value = models.CharField( max_length=255)
    modified_date = models.DateField()
    modified_by=models.ForeignKey(User , on_delete=models.CASCADE,)
    section_id = models.CharField( max_length=255)
    section_name = models.CharField( max_length=255) 
    approved_by = models.CharField( max_length=150,)
    supplier_approver = models.CharField( max_length=150,)
    supplier_approval_date = models.DateField()
    supplier_approval_status = models.CharField( max_length=255)
    supplier_comment = models.CharField( max_length=255)

    def __str__(self):
        return str(self.section_name)

class HistoryOfApprovalChanges(models.Model):

    fat1_options = (
        ('pending', 'pending'),
        ('approved', 'approved'),
        ('rejected', 'rejected'),
    )

    fat2_options = (
        ('pending', 'pending'),
        ('approved', 'approved'),
        ('rejected', 'rejected'),
    )

    fat3_options = (
        ('pending', 'pending'),
        ('approved', 'approved'),
        ('rejected', 'rejected'),
    )

    contract_id = models.ForeignKey(ContractBasic, on_delete=models.CASCADE,)
    contract_approver = models.CharField( max_length=150,)
    contract_approver_status = models.CharField( max_length=255)
    contract_approver_comment = models.CharField( max_length=255)
    FAT1_approver = models.ForeignKey(User, on_delete=models.CASCADE, related_name="fat1_hoc_rev")
    FAT1_required = models.BooleanField(default=True)
    FAT1_status = models.CharField( max_length=55, choices=fat1_options, default="pending",)
    FAT1_comments = models.CharField( max_length=255)
    FAT2_approver = models.ForeignKey(User, on_delete=models.CASCADE, related_name="fat2_hoc_rev")
    FAT2_required = models.BooleanField(default=True)
    FAT2_status = models.CharField( max_length=55, choices=fat2_options, default="pending", )
    FAT2_comments = models.CharField( max_length=255)
    FAT3_approver = models.ForeignKey(User, on_delete=models.CASCADE, related_name="fat3_hoc_rev")
    FAT3_required = models.BooleanField(default=True)
    FAT3_status = models.CharField( max_length=55, choices=fat3_options, default="pending", )
    FAT3_comments = models.CharField( max_length=255)

    def __str__(self):
        return str(self.contract_approver)

class ESignature(models.Model):

    options = (
        ('pending', 'pending'),
        ('signed', 'signed'),
        ('not_signed', 'not signed'),
    )

    contract_id = models.OneToOneField(ContractBasic, on_delete=models.CASCADE,)
    buyer_name = models.CharField( max_length=255)
    buyer_signature = models.ImageField( upload_to='media/images')
    buyer_signed_date = models.DateField()
    supplier_name = models.CharField( max_length=255)
    supplier_signature = models.ImageField( upload_to='media/images')
    supplier_signed_date = models.DateField()
    status = models.CharField( max_length=55, choices=options, default="pending",)
    supplier_comments = models.CharField( max_length=255)

    def __str__(self):
        return str(self.buyer_name)

class Uploads(models.Model):

    options = (
        ('pending', 'pending'),
        ('signed', 'signed'),
        ('not_signed', 'not signed'),
    )

    contract_id = models.ForeignKey(ContractBasic, on_delete=models.CASCADE,)
    file_name = models.FileField(blank=False, null=False)
    file_path = models.CharField( max_length=255)
    upload_date = models.DateField()

    def __str__(self):
        return str(self.file_name)
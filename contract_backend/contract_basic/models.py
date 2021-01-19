from django.db import models
from django.utils import timezone
import datetime
from user.models import User



class BusinessUnit(models.Model):
    bussname=models.CharField(max_length=255)

    def __str__(self):
        return self.bussname

class Tags(models.Model):
    tagname=models.CharField(max_length=255)

    def __str__(self):
        return self.tagname

class Department(models.Model):
    depname=models.CharField(max_length=255)

    def __str__(self):
        return self.depname

class Regions(models.Model):
    regname=models.CharField(max_length=255)

    def __str__(self):
        return self.regname

class Divisions(models.Model):
    divname=models.CharField(max_length=255)

    def __str__(self):
        return self.divname

class Sites(models.Model):
    sitename=models.CharField(max_length=255)

    def __str__(self):
        return self.sitename



# Create your models here.
class ContractBasic(models.Model):

    options = (
        ('low', 'low'),
        ('medium', 'medium'),
        ('high', 'high'),
        ('extreme', 'extreme'),
    )

    status_options = (
        ('active', 'active'),
        ('pending', 'pending'),
        ('suspended', 'suspended'),
        ('terminated', 'terminated'),
    )
    
    #supplier info
    supplier_name = models.CharField(max_length=255)
    supplier_type = models.CharField(max_length=255, null=True, blank=True)
    supplier_contact_name=models.CharField(max_length=150)
    supplier_contact_phone=models.CharField(max_length=80)
    supplier_contact_email=models.EmailField(max_length=254)
    managed_as_panel_contractor=models.BooleanField(default=False, null=True, blank=True)
    panel_ranking=models.CharField(max_length=255, null=True, blank=True)
    supplier_street_address=models.TextField()
    supplier_post_code = models.CharField(max_length=50)
    supplier_post_name = models.CharField(max_length=100, null=True, blank=True)
    supplier_city = models.CharField(max_length=80)
    supplier_state = models.CharField(max_length=80)
    supplier_country = models.CharField(max_length=80)
    supplier_ABN_number = models.CharField(max_length=50, null=True, blank=True)
    #buyer_info
    buyer_name = models.CharField(max_length=255)
    buyer_contact_name=models.CharField(max_length=150)
    buyer_contact_phone=models.CharField(max_length=80)
    buyer_contact_email=models.EmailField(max_length=254)
    buyer_street_address=models.TextField()
    buyer_post_code = models.CharField(max_length=50)
    buyer_post_name = models.CharField(max_length=100, null=True, blank=True)
    buyer_city = models.CharField(max_length=80)
    buyer_state = models.CharField(max_length=80)
    buyer_country = models.CharField(max_length=80)
    buyer_ABN_number = models.CharField(max_length=50, null=True, blank=True)
    #contract_info
    contract_title=models.CharField(max_length=255)
    contract_number=models.CharField(max_length=150)
    contract_risk=models.CharField(max_length=255, choices=options, default="low",)
    contract_status=models.CharField(max_length=100, choices=status_options, default="pending",)
    contract_type=models.CharField(max_length=255, )
    contract_manager=models.CharField(max_length=255)
    contract_initiator=models.CharField(max_length=255)
    contract_value=models.DecimalField(max_digits=20 ,decimal_places=2)
    administrator=models.ForeignKey(User, on_delete=models.CASCADE, related_name="administrator_rev")
    business_representative=models.CharField(max_length=255) 
    purchase_type=models.CharField(max_length=150)
    contract_items=models.CharField(max_length=150)
    created_by=models.ForeignKey(User, on_delete=models.CASCADE, related_name="creator_rev")
    created_date =models.DateField(default=timezone.now)
    modified_by=models.ForeignKey(User, on_delete=models.CASCADE, related_name="modify_rev", null=True, blank=True)
    modified_date =models.DateField(null=True, blank=True,)
    contract_owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="owner_rev")
    date_signed = models.DateField(null=True, blank=True)
    review_date = models.DateField(null=True, blank=True)
    price_review_date = models.DateField(null=True, blank=True)
    contract_expiry = models.DateField()
    contract_insurance_req = models.BooleanField(default=False)
    contract_rates = models.CharField(max_length=255)
    commencement_date = models.DateField()
    initial_term = models.CharField(max_length=255)
    ongoing = models.BooleanField(default=True)
    category1 = models.TextField( null=True, blank=True) #from taxonomy
    category2 = models.TextField( null=True, blank=True) #from taxonomy
    category3 = models.TextField( null=True, blank=True) #from taxonomy
    department = models.ManyToManyField(Department)
    business_unit = models.ManyToManyField(BusinessUnit)
    divisions = models.ManyToManyField(Divisions)
    regions = models.ManyToManyField(Regions)
    site = models.ManyToManyField(Sites)
    tags=models.ManyToManyField(Tags)
    location_of_hardcopy_contract = models.CharField(max_length=150, null=True, blank=True)
    notes=models.TextField(null=True, blank=True)
    contract_form = models.CharField(max_length=150, null=True, blank=True)
    
    objects = models.Manager()

    def __str__(self):
        return str(self.contract_title)

    # @property
    # def insurance(self):
    #     return self.contractrev.all()



class Insurance(models.Model):

    status_options = (
        ('active', 'active'),
        ('pending', 'pending'),
        ('expired', 'expired'),
    )

    insurance_options = (
        ('current', 'current'),
        ('history', 'history'),
    )

    supplier_name = models.CharField( max_length=255)
    contract_id = models.ForeignKey(ContractBasic, on_delete=models.CASCADE, related_name="contractrev")
    insurance_company_name = models.CharField( max_length=255, null=True, blank=True)
    insurance_type = models.CharField(max_length=255, null=True, blank=True)
    contract_insurance_expiry = models.DateField()
    insurance_status = models.CharField(max_length=100, choices=status_options, default="pending",)
    insurance_history = models.CharField(max_length=100, choices=insurance_options, default="current",)

    def __str__(self):
        return str(self.supplier_name)
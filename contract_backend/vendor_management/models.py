from django.db import models
from django.utils import timezone
from user.models import User

#vendor Tags
class VendorTag(models.Model):
    vendortagname=models.CharField(max_length=255)

    def __str__(self):
        return str(self.vendortagname)

#Vendor Trades
class VendorTrade(models.Model):
    vendortrade=models.CharField(max_length=255)

    def __str__(self):
        return str(self.vendortrade)



# Create your models here.
class VendorBasic(models.Model):
    
    vendor_number=models.CharField(max_length=255)
    abn=models.CharField(max_length=255 , unique=True)
    supp_name=models.CharField(max_length=255)
    contact_name=models.CharField(max_length=255)
    contact_email=models.EmailField(max_length=254)
    telephone=models.CharField(max_length=255,null=True, blank=True)
    mobile=models.CharField(max_length=255)
    address_line=models.TextField()
    address_suburb=models.CharField(max_length=255)
    address_state=models.CharField(max_length=255)
    address_postcode=models.CharField(max_length=255)
    supp_city=models.CharField(max_length=255,null=True, blank=True)
    supplier_country=models.CharField(max_length=255,null=True, blank=True)
    company_email=models.EmailField(max_length=254)
    website=models.CharField(max_length=255,null=True, blank=True)
    comments=models.TextField(null=True, blank=True)
    supplier_revenue_annual=models.DecimalField(max_digits=20 ,decimal_places=2,null=True, blank=True)
    buyer_annual_spend_apprx=models.DecimalField(max_digits=20 ,decimal_places=2, null=True, blank=True)
    company_size=models.DecimalField(max_digits=10 ,decimal_places=2,null=True, blank=True)
    active=models.BooleanField(default=False, null=True, blank=True)
    primary_buyer_contact=models.ForeignKey(User, on_delete=models.CASCADE, related_name="buyer_rev")
    created_by=models.ForeignKey(User, on_delete=models.CASCADE, related_name="Vendorcreator_rev")
    created_date=models.DateField(default=timezone.now)
    modified_by=models.ForeignKey(User, on_delete=models.CASCADE, related_name="modifier_rev", null=True, blank=True)
    modified_date=models.DateField(null=True, blank=True,)
    trade = models.ManyToManyField(VendorTrade)
    tags=models.ManyToManyField(VendorTag)
    
    objects = models.Manager()

    def __str__(self):
        return str(self.supp_name)
    
    class Meta:
       ordering = ['-id']

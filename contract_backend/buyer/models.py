from django.db import models
from django.utils import timezone
from user.models import User

# Create your models here.
class BuyerBasic(models.Model):

    buyer_name = models.CharField(max_length=255)
    buyer_street_address=models.TextField()
    buyer_post_code = models.CharField(max_length=50)
    buyer_post_name = models.CharField(max_length=100, null=True, blank=True)
    buyer_city = models.CharField(max_length=80)
    buyer_state = models.CharField(max_length=80)
    buyer_country = models.CharField(max_length=80)
    buyer_ABN_number = models.CharField(max_length=50, null=True, blank=True)
    created_by=models.ForeignKey(User, on_delete=models.CASCADE, related_name="Buyercreator_rev")
    created_date=models.DateField(default=timezone.now)
    modified_by=models.ForeignKey(User, on_delete=models.CASCADE, related_name="Buyer_modifier_rev", null=True, blank=True)
    modified_date=models.DateField(null=True, blank=True,)
    
    objects = models.Manager()

    def __str__(self):
        return str(self.buyer_name)

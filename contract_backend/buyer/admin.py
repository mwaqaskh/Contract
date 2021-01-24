
from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import BuyerBasic




@admin.register(BuyerBasic)
class BuyerAdmin(ImportExportModelAdmin):
    list_display = [field.name for field in BuyerBasic._meta.get_fields()]

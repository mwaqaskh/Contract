
from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import VendorBasic




@admin.register(VendorBasic)
class VendorAdmin(ImportExportModelAdmin):
    list_display = [field.name for field in VendorBasic._meta.get_fields()]

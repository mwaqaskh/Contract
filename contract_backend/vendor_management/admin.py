
from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import VendorBasic,VendorTag,VendorTrade



@admin.register(VendorTag)
class VendorTagsAdmin(ImportExportModelAdmin):
    list_display = ('vendor_tagname',)


@admin.register(VendorTrade)
class VendorTradeAdmin(ImportExportModelAdmin):
    list_display = ('vendor_trade',)


admin.site.register(VendorBasic)
# @admin.register(VendorBasic)
# class VendorAdmin(ImportExportModelAdmin):
#     list_display = ['__all__']


from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import ContractApprovalStatus, HistoryOfChanges, HistoryOfApprovalChanges, ESignature, Uploads

# Register your models here.
@admin.register(ContractApprovalStatus)
class ContractApprovalStatusAdmin(ImportExportModelAdmin):
    list_display = [f.name for f in ContractApprovalStatus._meta.get_fields()]

@admin.register(HistoryOfChanges)
class HistoryOfChangesAdmin(ImportExportModelAdmin):
    list_display = [f.name for f in HistoryOfChanges._meta.get_fields()]

@admin.register(HistoryOfApprovalChanges)
class HistoryOfApprovalChangesAdmin(ImportExportModelAdmin):
    list_display = [f.name for f in HistoryOfApprovalChanges._meta.get_fields()]

@admin.register(ESignature)
class ESignatureAdmin(ImportExportModelAdmin):
    list_display = [f.name for f in ESignature._meta.get_fields()]

@admin.register(Uploads)
class UploadsAdmin(ImportExportModelAdmin):
    list_display = [f.name for f in Uploads._meta.get_fields()]
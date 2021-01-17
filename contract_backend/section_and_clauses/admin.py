from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import DefaultSectionAndClauses, ContractSectionAndClauses

# Register your models here.
@admin.register(DefaultSectionAndClauses)
class DefaultSectionAndClausesAdmin(ImportExportModelAdmin):
    list_display = [f.name for f in DefaultSectionAndClauses._meta.get_fields()]

@admin.register(ContractSectionAndClauses)
class ContractSectionAndClausesAdmin(ImportExportModelAdmin):
    list_display = [f.name for f in ContractSectionAndClauses._meta.get_fields()]

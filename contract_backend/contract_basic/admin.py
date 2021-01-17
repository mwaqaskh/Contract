from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import ContractBasic, Insurance

admin.site.register(ContractBasic)


@admin.register(Insurance)
class InsuranceAdmin(ImportExportModelAdmin):
    list_display = ('id',
            'contract_id',
            'supplier_name',
            'insurance_company_name',
            'insurance_type', 
            'contract_insurance_expiry', 
            'insurance_status',     
            'insurance_history', )

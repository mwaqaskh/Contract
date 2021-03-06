# Generated by Django 3.1.4 on 2021-01-02 08:26

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContractBasic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('supplier_name', models.CharField(max_length=255)),
                ('supplier_type', models.CharField(blank=True, max_length=255, null=True)),
                ('supplier_contact_name', models.CharField(max_length=150)),
                ('supplier_contact_phone', models.CharField(max_length=80)),
                ('supplier_contact_email', models.EmailField(max_length=254)),
                ('managed_as_panel_contractor', models.BooleanField(blank=True, default=False, null=True)),
                ('panel_ranking', models.CharField(blank=True, max_length=255, null=True)),
                ('supplier_street_address', models.TextField()),
                ('supplier_post_code', models.CharField(max_length=50)),
                ('supplier_post_name', models.CharField(blank=True, max_length=100, null=True)),
                ('supplier_city', models.CharField(max_length=80)),
                ('supplier_state', models.CharField(max_length=80)),
                ('supplier_country', models.CharField(max_length=80)),
                ('supplier_ABN_number', models.CharField(blank=True, max_length=50, null=True)),
                ('buyer_name', models.CharField(max_length=255)),
                ('buyer_contact_name', models.CharField(max_length=150)),
                ('buyer_contact_phone', models.CharField(max_length=80)),
                ('buyer_contact_email', models.EmailField(max_length=254)),
                ('buyer_street_address', models.TextField()),
                ('buyer_post_code', models.CharField(max_length=50)),
                ('buyer_post_name', models.CharField(blank=True, max_length=100, null=True)),
                ('buyer_city', models.CharField(max_length=80)),
                ('buyer_state', models.CharField(max_length=80)),
                ('buyer_country', models.CharField(max_length=80)),
                ('buyer_ABN_number', models.CharField(blank=True, max_length=50, null=True)),
                ('contract_title', models.CharField(max_length=255)),
                ('contract_number', models.CharField(max_length=150)),
                ('contract_risk', models.CharField(choices=[('low', 'low'), ('medium', 'medium'), ('high', 'high'), ('extreme', 'extreme')], default='low', max_length=255)),
                ('contract_status', models.CharField(choices=[('active', 'active'), ('pending', 'pending'), ('suspended', 'suspended'), ('terminated', 'terminated')], default='pending', max_length=100)),
                ('contract_type', models.CharField(choices=[('active', 'active'), ('pending', 'pending'), ('suspended', 'suspended'), ('terminated', 'terminated')], default='local supplier', max_length=255)),
                ('contract_manager', models.CharField(max_length=255)),
                ('contract_initiator', models.CharField(max_length=255)),
                ('contract_value', models.DecimalField(decimal_places=2, max_digits=20)),
                ('business_representative', models.CharField(max_length=255)),
                ('purchase_type', models.CharField(max_length=150)),
                ('contract_items', models.CharField(max_length=150)),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('modified_date', models.DateTimeField(blank=True, null=True)),
                ('date_signed', models.DateTimeField(blank=True, null=True)),
                ('review_date', models.DateTimeField(blank=True, null=True)),
                ('price_review_date', models.DateTimeField(blank=True, null=True)),
                ('contract_expiry', models.DateTimeField()),
                ('contract_insurance_req', models.BooleanField(default=False)),
                ('contract_rates', models.CharField(max_length=255)),
                ('commencement_date', models.DateTimeField()),
                ('initial_term', models.CharField(max_length=255)),
                ('ongoing', models.BooleanField(default=True)),
                ('category1', models.CharField(blank=True, max_length=255, null=True)),
                ('category2', models.CharField(blank=True, max_length=255, null=True)),
                ('category3', models.CharField(blank=True, max_length=255, null=True)),
                ('department', models.CharField(blank=True, max_length=255, null=True)),
                ('business_unit', models.CharField(blank=True, max_length=255, null=True)),
                ('divisions', models.CharField(blank=True, max_length=255, null=True)),
                ('regions', models.CharField(blank=True, max_length=255, null=True)),
                ('site', models.CharField(blank=True, max_length=150, null=True)),
                ('location_of_hardcopy_contract', models.CharField(blank=True, max_length=150, null=True)),
                ('notes', models.TextField(blank=True, null=True)),
                ('contract_form', models.CharField(blank=True, max_length=150, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Insurance',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('supplier_name', models.CharField(max_length=255)),
                ('insurance_company_name', models.CharField(blank=True, max_length=255, null=True)),
                ('insurance_type', models.CharField(blank=True, max_length=255, null=True)),
                ('contract_insurance_expiry', models.DateTimeField()),
                ('insurance_status', models.CharField(choices=[('active', 'active'), ('pending', 'pending'), ('expired', 'expired')], default='pending', max_length=100)),
                ('insurance_history', models.CharField(choices=[('current', 'current'), ('history', 'history')], default='current', max_length=100)),
                ('contract_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='contract_rev', to='contract_basic.contractbasic')),
            ],
        ),
    ]

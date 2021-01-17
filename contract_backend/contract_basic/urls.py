from django.urls import path, include
from rest_framework import routers
from .views import ContractBasicViewSet, InsuranceViewSet

router=routers.DefaultRouter()
router.register("contract", ContractBasicViewSet, basename='contract')
router.register("insurance", InsuranceViewSet, basename='insurance')

urlpatterns = [
    path('', include(router.urls)),
]
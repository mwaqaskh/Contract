from django.urls import path, include
from rest_framework import routers
from .views import DefaultSectionAndClausesViewSet, ContractSectionAndClausesViewSet

router=routers.DefaultRouter()
router.register("default_sandc", DefaultSectionAndClausesViewSet, basename='default_sandc')
router.register("contract_sandc", ContractSectionAndClausesViewSet, basename='contract_sandc')

urlpatterns = [
    path('', include(router.urls)),
]
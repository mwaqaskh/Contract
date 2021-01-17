from django.urls import path, include
from rest_framework import routers
from .views import HOCViewSet, HistoryOfApprovalChangesViewSet, ContractApprovalViewSet, ESignatureViewSet, UploadsViewSet

router=routers.DefaultRouter()
router.register("hoc", HOCViewSet, basename='hoc')
router.register("hoc_approval", HistoryOfApprovalChangesViewSet, basename='hoc_approval')
router.register("contract_approval", ContractApprovalViewSet, basename='contract_approval')
router.register("esign", ESignatureViewSet, basename='esign')
router.register("uploads", UploadsViewSet, basename='uploads')

urlpatterns = [
    path('', include(router.urls)),
]
from django.urls import path, include
from rest_framework import routers
from .views import VendorBasicViewSet,VendorTagViewSet,VendorTradeViewSet, VendorListView

router=routers.DefaultRouter()
router.register("basic", VendorBasicViewSet, basename='vendr_basic')
router.register("vendor_tag", VendorTagViewSet, basename='vendor_tag')
router.register("vendor_trade", VendorTradeViewSet, basename='vendor_trade')

urlpatterns = [
    path('', include(router.urls)),
    path('vendorlist/',VendorListView.as_view())
]
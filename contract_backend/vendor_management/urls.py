from django.urls import path, include
from rest_framework import routers
from .views import VendorBasicViewSet

router=routers.DefaultRouter()
router.register("basic", VendorBasicViewSet, basename='contract')


urlpatterns = [
    path('', include(router.urls)),
]
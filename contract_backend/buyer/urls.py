from django.urls import path, include
from rest_framework import routers
from .views import BuyerBasicViewSet

router=routers.DefaultRouter()
router.register("basic", BuyerBasicViewSet, basename='buyer_info')


urlpatterns = [
    path('', include(router.urls)),
]
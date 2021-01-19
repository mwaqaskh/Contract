from django.urls import path, include
from rest_framework import routers
from .views import ContractBasicViewSet, InsuranceViewSet,BusinessUnitViewSet,DepartmentViewSet,RegionsViewSet,DivisionsUnitViewSet,SitesViewSet,TagsViewSet,ContractListView

router=routers.DefaultRouter()
router.register("contract", ContractBasicViewSet, basename='contract')
router.register("insurance", InsuranceViewSet, basename='insurance')
router.register("bu", BusinessUnitViewSet, basename='businesview')
router.register("dept", DepartmentViewSet, basename='deptview')
router.register("region", RegionsViewSet, basename='regionview')
router.register("div", DivisionsUnitViewSet, basename='division')
router.register("site", SitesViewSet, basename='siteview')
router.register("tag", TagsViewSet, basename='tagview')


urlpatterns = [
    path('', include(router.urls)),
    path('contractlist/', ContractListView.as_view(),),
]







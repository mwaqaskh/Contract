from rest_framework import viewsets, generics
from rest_framework.response import Response
from .models import VendorBasic,VendorTag,VendorTrade

from .serializers import VendorBasicSerializer,VendorTagSerializer,VendorTradeSerializer
from rest_framework.generics import get_object_or_404
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter,SearchFilter
from django_filters import FilterSet
from django_filters import rest_framework as filters

#pagination import
from rest_framework.pagination import LimitOffsetPagination,PageNumberPagination
 
 
 
class VendorPagination(PageNumberPagination):
    page_size=2

class VendorFilter(FilterSet):
    active=filters.CharFilter('active')
    tags=filters.CharFilter(method='filter_by_tags')
    trade=filters.CharFilter(method='filter_by_trade')

    class Meta:
        model:VendorBasic
        fields=('active','tags','trade')
    
    def filter_by_tags(self,queryset,name,value):
        tags_names=value.strip().split(',')
        tags=VendorTag.objects.filter(vendortagname__in=tags_names)
        return queryset.filter(tags__in=tags).distinct()

    def filter_by_trade(self,queryset,name,value):
        trade_names=value.strip().split(',')
        trades=VendorTrade.objects.filter(vendortrade__in=trade_names)
        return queryset.filter(trade__in=trades).distinct()


class VendorListView(generics.ListAPIView):
    serializer_class=VendorBasicSerializer
    queryset=VendorBasic.objects.all()
    filter_backends = (DjangoFilterBackend, OrderingFilter, SearchFilter)
    filter_class = VendorFilter
    search_fields=('active','tags__vendortagname','trade__vendortrade' )
    pagination_class=VendorPagination
    ordering_fields=('active',)




    

class VendorBasicViewSet(viewsets.ViewSet):
    #authentication_classes = [JWTAuthentication]
    #permission_classes = [IsAuthenticated]

    def list(self, request):
        vendors = VendorBasic.objects.all()
        serializer = VendorBasicSerializer(
            vendors, many=True, context={"request": request})
        response_dict = {"error": False,
                         "message": "List of all vendors", "data": serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = VendorBasicSerializer(
                data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Vendor saved successfully"}
        except:
            dict_response = {'error': True,
                             'message': serializer.errors}
        return Response(dict_response)

    def update(self, request, pk=id):
        try:
            queryset = VendorBasic.objects.all()
            vendor = get_object_or_404(queryset, pk=pk)
            serializer = VendorBasicSerializer(
                vendor, data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Successfully Updated Vendor"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Updating Vendor"}
        return Response(dict_response)


    def retrieve(self, request, pk=id):
        queryset = VendorBasic.objects.all()
        vendor = get_object_or_404(queryset, pk=pk)
        serializer = VendorBasicSerializer(vendor, context={"request": request})
        return Response({'error': False, 'message': "Single Data Fetch", "data": serializer.data})

    def destroy(self, request, pk=id):
        try:
            queryset = VendorBasic.objects.all()
            vendor = get_object_or_404(queryset, pk=pk)
            vendor.delete()
            dict_response = {"error": False,
                             "message": "Successfully Deleted Contract"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Deleting Contract"}
        return Response(dict_response)


class VendorTagViewSet(viewsets.ModelViewSet):
    queryset=VendorTag.objects.all()
    serializer_class=VendorTagSerializer

class VendorTradeViewSet(viewsets.ModelViewSet):
    queryset=VendorTrade.objects.all()
    serializer_class=VendorTradeSerializer
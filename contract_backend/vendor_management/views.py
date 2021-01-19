from rest_framework import viewsets, generics
from rest_framework.response import Response
from .models import VendorBasic

from .serializers import VendorBasicSerializer
from rest_framework.generics import get_object_or_404
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated

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
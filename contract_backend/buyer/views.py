from rest_framework import viewsets, generics
from rest_framework.response import Response
from .models import BuyerBasic

from .serializers import BuyerBasicSerializer
from rest_framework.generics import get_object_or_404
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated

class BuyerBasicViewSet(viewsets.ViewSet):
    #authentication_classes = [JWTAuthentication]
    #permission_classes = [IsAuthenticated]

    def list(self, request):
        Buyer = BuyerBasic.objects.all()
        serializer = BuyerBasicSerializer(
            Buyer, many=True, context={"request": request})
        response_dict = {"error": False,
                         "message": "Buyer Info", "data": serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = BuyerBasicSerializer(
                data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Buyer saved successfully"}
        except:
            dict_response = {'error': True,
                             'message': serializer.errors}
        return Response(dict_response)

    def update(self, request, pk=id):
        try:
            queryset = BuyerBasic.objects.all()
            buyer = get_object_or_404(queryset, pk=pk)
            serializer = BuyerBasicSerializer(
                buyer, data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Successfully Updated buyer"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Updating buyer"}
        return Response(dict_response)


    def retrieve(self, request, pk=id):
        queryset = BuyerBasic.objects.all()
        buyer = get_object_or_404(queryset, pk=pk)
        serializer = BuyerBasicSerializer(buyer, context={"request": request})
        return Response({'error': False, 'message': "Single Data Fetch", "data": serializer.data})

    def destroy(self, request, pk=id):
        try:
            queryset = BuyerBasic.objects.all()
            buyer = get_object_or_404(queryset, pk=pk)
            buyer.delete()
            dict_response = {"error": False,
                             "message": "Successfully Deleted Buyer"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Deleting Buyer"}
        return Response(dict_response)
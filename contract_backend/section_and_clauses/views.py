from rest_framework import viewsets, generics
from rest_framework.response import Response
from .models import DefaultSectionAndClauses, ContractSectionAndClauses
from .serializers import DefaultSectionAndClausesSerializer, ContractSectionAndClausesSerializer
from rest_framework.generics import get_object_or_404
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class DefaultSectionAndClausesViewSet(viewsets.ViewSet):
    #authentication_classes = [JWTAuthentication]
    #permission_classes = [IsAuthenticated]

    def list(self, request):
        default_clauses = DefaultSectionAndClauses.objects.all()
        serializer = DefaultSectionAndClausesSerializer(
            default_clauses, many=True, context={"request": request})
        response_dict = {"error": False,
                         "message": "List of Default Section and Clauses", "data": serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = DefaultSectionAndClausesSerializer(
                data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Default Section or Clause saved successfully"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Saving default section and clause"}
        return Response(dict_response)

    def update(self, request, pk=id):
        try:
            queryset = DefaultSectionAndClauses.objects.all()
            default_clauses = get_object_or_404(queryset, pk=pk)
            serializer = DefaultSectionAndClausesSerializer(
                default_clauses, data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Successfully Updated Default Section or Clause"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Updating Default Section or Clause"}
        return Response(dict_response)

    def retrieve(self, request, pk=id):
        queryset = DefaultSectionAndClauses.objects.all()
        default_clauses = get_object_or_404(queryset, pk=pk)
        serializer = DefaultSectionAndClausesSerializer(default_clauses, context={"request": request})
        return Response({'error': False, 'message': "Single Data Fetch", "data": serializer.data})

    def destroy(self, request, pk=id):
        try:
            queryset = DefaultSectionAndClauses.objects.all()
            default_clauses = get_object_or_404(queryset, pk=pk)
            default_clauses.delete()
            dict_response = {"error": False,
                             "message": "Successfully Deleted Default Section or Clause"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Deleting Default Section or Clause"}
        return Response(dict_response)


# ContracttSectionAndClauses, ContracttSectionAndClausesSerializer
class ContractSectionAndClausesViewSet(viewsets.ViewSet):
    #authentication_classes = [JWTAuthentication]
    #permission_classes = [IsAuthenticated]

    def list(self, request):
        contract_clauses = ContractSectionAndClauses.objects.all()
        serializer = ContractSectionAndClausesSerializer(
            contract_clauses, many=True, context={"request": request})
        response_dict = {"error": False,
                         "message": "List of Contract Section and Clauses", "data": serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = ContractSectionAndClausesSerializer(
                data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Contract Section or Clause saved successfully"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Saving Contract section or clause"}
        return Response(dict_response)

    def update(self, request, pk=id):
        try:
            queryset = ContractSectionAndClauses.objects.all()
            contract_clauses = get_object_or_404(queryset, pk=pk)
            serializer = ContractSectionAndClausesSerializer(
                contract_clauses, data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Successfully Updated Contract Section or Clause"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Updating Contract Section or Clause"}
        return Response(dict_response)

    def retrieve(self, request, pk=id):
        queryset = ContractSectionAndClauses.objects.all()
        contract_clauses = get_object_or_404(queryset, pk=pk)
        serializer = ContractSectionAndClausesSerializer(contract_clauses, context={"request": request})
        return Response({'error': False, 'message': "Single Data Fetch", "data": serializer.data})

    def destroy(self, request, pk=id):
        try:
            queryset = ContractSectionAndClauses.objects.all()
            contract_clauses = get_object_or_404(queryset, pk=pk)
            contract_clauses.delete()
            dict_response = {"error": False,
                             "message": "Successfully Deleted Contract Section or Clause"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Deleting Contract Section or Clause"}
        return Response(dict_response)
from rest_framework import viewsets, generics
from rest_framework.response import Response
from .models import ContractApprovalStatus, HistoryOfChanges, ESignature, Uploads, HistoryOfApprovalChanges
from .serializers import ContractApprovalSerializer, HOCSerializer, HistoryOfApprovalChangesSerializer, ESignatureSerializer, UploadsSerializer
from rest_framework.generics import get_object_or_404
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class HOCViewSet(viewsets.ViewSet):
    #authentication_classes = [JWTAuthentication]
    #permission_classes = [IsAuthenticated]

    def list(self, request):
        history = HistoryOfChanges.objects.all()
        serializer = HOCSerializer(
            history, many=True, context={"request": request})
        response_dict = {"error": False,
                         "message": "History of changes", "data": serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = HOCSerializer(
                data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "History saved successfully"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Saving History"}
        return Response(dict_response)

    def update(self, request, pk=id):
        try:
            queryset = HistoryOfChanges.objects.all()
            history = get_object_or_404(queryset, pk=pk)
            serializer = HOCSerializer(
                history, data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Successfully Updated History"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Updating History"}
        return Response(dict_response)

    def retrieve(self, request, pk=id):
        queryset = HistoryOfChanges.objects.all()
        history = get_object_or_404(queryset, pk=pk)
        serializer = HOCSerializer(history, context={"request": request})
        return Response({'error': False, 'message': "Single Data Fetch", "data": serializer.data})

    def destroy(self, request, pk=id):
        try:
            queryset = HistoryOfChanges.objects.all()
            history = get_object_or_404(queryset, pk=pk)
            history.delete()
            dict_response = {"error": False,
                             "message": "Successfully Deleted History"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Deleting History"}
        return Response(dict_response)


class HistoryOfApprovalChangesViewSet(viewsets.ViewSet):
    #authentication_classes = [JWTAuthentication]
    #permission_classes = [IsAuthenticated]

    def list(self, request):
        history = HistoryOfApprovalChanges.objects.all()
        serializer = HistoryOfApprovalChangesSerializer(
            history, many=True, context={"request": request})
        response_dict = {"error": False,
                         "message": "History of changes", "data": serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = HistoryOfApprovalChangesSerializer(
                data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "History saved successfully"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Saving History"}
        return Response(dict_response)

    def update(self, request, pk=id):
        try:
            queryset = HistoryOfApprovalChanges.objects.all()
            history = get_object_or_404(queryset, pk=pk)
            serializer = HistoryOfApprovalChangesSerializer(
                history, data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Successfully Updated History"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Updating History"}
        return Response(dict_response)

    def retrieve(self, request, pk=id):
        queryset = HistoryOfApprovalChanges.objects.all()
        history = get_object_or_404(queryset, pk=pk)
        serializer = HistoryOfApprovalChangesSerializer(history, context={"request": request})
        return Response({'error': False, 'message': "Single Data Fetch", "data": serializer.data})

    def destroy(self, request, pk=id):
        try:
            queryset = HistoryOfApprovalChanges.objects.all()
            history = get_object_or_404(queryset, pk=pk)
            history.delete()
            dict_response = {"error": False,
                             "message": "Successfully Deleted History"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Deleting History"}
        return Response(dict_response)


class ContractApprovalViewSet(viewsets.ViewSet):
    #authentication_classes = [JWTAuthentication]
    #permission_classes = [IsAuthenticated]

    def list(self, request):
        approval = ContractApprovalStatus.objects.all()
        serializer = ContractApprovalSerializer(
            approval, many=True, context={"request": request})
        response_dict = {"error": False,
                         "message": "Contract Approval Status", "data": serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = ContractApprovalSerializer(
                data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Contract approval saved successfully"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Saving contract approval"}
        return Response(dict_response)

    def update(self, request, pk=id):
        try:
            queryset = ContractApprovalStatus.objects.all()
            approval = get_object_or_404(queryset, pk=pk)
            serializer = ContractApprovalSerializer(
                approval, data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Successfully Updated Contract Approval"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Updating Contract Approval"}
        return Response(dict_response)

    def retrieve(self, request, pk=id):
        queryset = ContractApprovalStatus.objects.all()
        approval = get_object_or_404(queryset, pk=pk)
        serializer = ContractApprovalSerializer(approval, context={"request": request})
        return Response({'error': False, 'message': "Single Data Fetch", "data": serializer.data})

    def destroy(self, request, pk=id):
        try:
            queryset = ContractApprovalStatus.objects.all()
            approval = get_object_or_404(queryset, pk=pk)
            approval.delete()
            dict_response = {"error": False,
                             "message": "Successfully Deleted Approval Status"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Deleting Approval Status"}
        return Response(dict_response)

#ESignature, ESignatureSerializer
class ESignatureViewSet(viewsets.ViewSet):
    #authentication_classes = [JWTAuthentication]
    #permission_classes = [IsAuthenticated]

    def list(self, request):
        esign = ESignature.objects.all()
        serializer = ESignatureSerializer(
            esign, many=True, context={"request": request})
        response_dict = {"error": False,
                         "message": "List of E-Signature", "data": serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = ESignatureSerializer(
                data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "E-Signature saved successfully"}
        except:
            dict_response = {'error': True,
                             'message': serializer.errors}
        return Response(dict_response)

    def update(self, request, pk=id):
        try:
            queryset = ESignature.objects.all()
            esign = get_object_or_404(queryset, pk=pk)
            serializer = ESignatureSerializer(
                esign, data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Successfully Updated E-Signature"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Updating E-Signature"}
        return Response(dict_response)

    def retrieve(self, request, pk=id):
        queryset = ESignature.objects.all()
        esign = get_object_or_404(queryset, pk=pk)
        serializer = ESignatureSerializer(esign, context={"request": request})
        return Response({'error': False, 'message': "Single Data Fetch", "data": serializer.data})

    def destroy(self, request, pk=id):
        try:
            queryset = ESignature.objects.all()
            esign = get_object_or_404(queryset, pk=pk)
            esign.delete()
            dict_response = {"error": False,
                             "message": "Successfully Deleted E-Signature"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Deleting E-Signature"}
        return Response(dict_response)

#Uploads  UploadsSerializer
class UploadsViewSet(viewsets.ViewSet):
    #authentication_classes = [JWTAuthentication]
    #permission_classes = [IsAuthenticated]

    def list(self, request):
        upload = Uploads.objects.all()
        serializer = UploadsSerializer(
            upload, many=True, context={"request": request})
        response_dict = {"error": False,
                         "message": "List of Uploads", "data": serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = UploadsSerializer(
                data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Uploaded file saved successfully"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Saving uploaded file"}
        return Response(dict_response)

    def update(self, request, pk=id):
        try:
            queryset = Uploads.objects.all()
            upload = get_object_or_404(queryset, pk=pk)
            serializer = UploadsSerializer(
                upload, data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Successfully Updated Uploaded File"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Updating Uploaded File"}
        return Response(dict_response)

    def retrieve(self, request, pk=id):
        queryset = Uploads.objects.all()
        upload = get_object_or_404(queryset, pk=pk)
        serializer = UploadsSerializer(upload, context={"request": request})
        return Response({'error': False, 'message': "Single Data Fetch", "data": serializer.data})

    def destroy(self, request, pk=id):
        try:
            queryset = Uploads.objects.all()
            upload = get_object_or_404(queryset, pk=pk)
            upload.delete()
            dict_response = {"error": False,
                             "message": "Successfully Deleted Uploaded File"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Deleting Uploaded File"}
        return Response(dict_response)
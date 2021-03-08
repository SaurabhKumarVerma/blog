from re import A
from django.http import request, JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
# Create your views here.
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .accountSerlizer import AccountSerlizers
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
# from .models import RegisterUser

User = get_user_model()

@csrf_exempt
@api_view(['POST'])
# @permission_classes([sessionA])
def CreateUser(request):
    if request.method == 'POST':
        serilized = AccountSerlizers(data=request.data)
        if serilized.is_valid():
            serilized.save()
        
        else:
            return JsonResponse({'error':serilized.errors})
        results = User.objects.all()
        output_serializer = AccountSerlizers(results, many=True)  
        
    return Response({
        'User_Registered':'User Registed Suceesfully'
        })
@csrf_exempt
@api_view(['POST'])
def login(request):
    try:
        user_email = request.data['email']
        user_password = request.data['password']

        user = User.objects.get(email = user_email)
        if user.check_password(user_password):
        
            token, created = Token.objects.get_or_create(user=user)
        return Response({'Logged In': user.email,'user':user.username,'token':token.key})
    except:
        return Response("User Does Not Exit")
    

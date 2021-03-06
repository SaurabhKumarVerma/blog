from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from .models import Blog
# from django.http.response import JsonResponse, ResponseHeaders
from .BlogSerializer import BlogSerializers
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework import serializers
from django.http import request, JsonResponse
from rest_framework_simplejwt.authentication import JWTAuthentication
# Create your views here.
@csrf_exempt
@api_view(['POST'])

@permission_classes([IsAuthenticated])
@authentication_classes([JWTAuthentication])
def create_blog(request):
    if request.method == 'POST':
        serialized = BlogSerializers(data=request.data)
        if serialized.is_valid():
            serialized.save()
        else:
            return Response({'error':serialized.errors})
        result = Blog.objects.all()
        BlogSerializers(result,many=True)
        
    return Response({
        "Created":"Blog Created Successfully"
    })
    # put
@csrf_exempt
@api_view(['GET'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
def blog_detail(request,blog_id):
    try:
        blog_id = Blog.objects.get(id=blog_id)
        blog_obj = BlogSerializers(blog_id)
    except:
        return Response('Blog Does Not Found')
    return Response(blog_obj.data)
    
@csrf_exempt
@api_view(['PUT'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
def blog_update(request,blog_id):
    blog_update_id = Blog.objects.get(id=blog_id)
    blog_serialized_obj = BlogSerializers(blog_update_id,data=request.data)
    try:
        if blog_serialized_obj.is_valid():
            blog_serialized_obj.save()
            return Response(blog_serialized_obj.data)
        else:
            return JsonResponse({'error':blog_serialized_obj.errors})
    except:
        return Response('Blog Deleted')

@csrf_exempt
@api_view(['DELETE'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
def blog_delete(request,blog_id):
    try:
        blog_id = Blog.objects.get(id=blog_id)
        # blog_obj = BlogSerializers(blog_id)
        blog_id.delete()
    except:
        return Response('Blog Does Not Exit')
    return Response('Deleted')
@csrf_exempt
@api_view(['GET'])
def all_blog(repuest):
    try:
        all_blog = Blog.objects.all()
        Response(all_blog)
    except:
        return Response('Can Not fetch')
    return Response('Not Found')
        
    


    
   

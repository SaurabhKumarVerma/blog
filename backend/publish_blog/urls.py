
from django.urls import path,include
from . import views

urlpatterns = [
    path('create_blog/', views.create_blog),
    path('blog_detail/<int:blog_id>/', views.blog_detail),
    path('blog_update/<int:blog_id>/', views.blog_update),
    path('blog_delete/<int:blog_id>/', views.blog_delete),
    path('all_blog/', views.all_blog),
    
]

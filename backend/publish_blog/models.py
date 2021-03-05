from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.
User = get_user_model()

class Blog(models.Model):
    blog_title = models.CharField(max_length=100,null=False,default='Anynomyous')
    blog_Author = models.ForeignKey('auth.User',on_delete=models.CASCADE,null=False,related_name='blog')
    blog_date = models.DateField(auto_now_add=True,null=True)
    blog_text = models.TextField(null=False)

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator
from django.utils.html import escape
from django.utils.safestring import mark_safe
from decimal import Decimal

# class User(AbstractUser):
#     USER_ROLES = (
#         ('customer', 'Customer'),
#         ('seller', 'Seller'),
#         ('admin', 'Admin'),
#     )
    
#     role = models.CharField(max_length=10, choices=USER_ROLES, default='customer')
#     balance = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
#     phone_number = models.CharField(max_length=15, blank=True, null=True)
#     verified = models.BooleanField(default=False)
#     created_at = models.DateTimeField(auto_now_add=True)
    
#     def __str__(self):
#         return self.username
    
# class Game(models.Model):
#     name = models.CharField(max_length=50, unique=True)
#     logo = models.ImageField(upload_to='games/logos/', blank=True, null=True)
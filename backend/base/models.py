from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    _id = models.BigAutoField(primary_key=True , editable=False)
    user = models.ForeignKey(User , on_delete=models.SET_NULL , null=True)
    name = models.CharField(max_length=200 , null=True)
    #image =
    brand = models.CharField(max_length=200 , null=True , blank=True)
    category = models.CharField(max_length=200 , null=True , blank=True)
    description = models.TextField(null=True , blank=True)
    rating = models.DecimalField(max_digits=3 , decimal_places=2 , null=True , blank=True)
    num_Reviews = models.IntegerField(null=True , blank=True , default=0)
    price = models.DecimalField(max_digits=9 , decimal_places=2 , null=True , blank=True)
    count_In_Stock = models.IntegerField(null=True , blank=True , default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name
    

class Order(models.Model):
    _id = models.BigAutoField(primary_key=True , editable=False)
    user = models.ForeignKey(User , on_delete=models.SET_NULL , null=True)
    payment_Method = models.CharField(max_length=200 , null=True , blank=True)
    tax_price = models.DecimalField(max_digits=7 , decimal_places=2 , null=True , blank=True)
    shipping_price = models.DecimalField(max_digits=7 , decimal_places=2 , null=True , blank=True)
    total_price = models.DecimalField(max_digits=9 , decimal_places=2 , null=True , blank=True)
    is_paid = models.BooleanField(default=False)
    paid_at = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    is_delivered = models.BooleanField(default=False)
    delivered_at = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.created_at)
    
    
class OrderItem(models.Model):
    _id = models.BigAutoField(primary_key=True , editable=False)
    order = models.ForeignKey(Order , on_delete=models.SET_NULL , null=True)
    product = models.ForeignKey(Product , on_delete=models.SET_NULL , null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=9 , decimal_places=2 , null=True , blank=True)
    #image =
    def __str__(self):
        return str(self.name)
    
class ShippingAddress(models.Model):
    _id = models.BigAutoField(primary_key=True , editable=False) 
    order = models.OneToOneField(Order , on_delete=models.CASCADE , null=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postal_code = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shipping_price = models.DecimalField(max_digits=7 , decimal_places=2 , null=True , blank=True)
    
    def __str__(self):
        return str(self.address)
    
    
class Review(models.Model):
    _id = models.BigAutoField(primary_key=True , editable=False) 
    user = models.ForeignKey(User , on_delete=models.SET_NULL , null=True)
    product = models.ForeignKey(Product , on_delete=models.SET_NULL , null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating =  models.DecimalField(max_digits=3 , decimal_places=2 , null=True , blank=True)
    comment = models.TextField(null=True , blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.rating)
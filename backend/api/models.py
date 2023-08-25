from django.db import models
from django.utils.text import slugify
from django.contrib.auth.models import User
from django.utils import timezone
from django.utils.safestring import mark_safe
# Create your models here.

# class User(models.Model):
#     username = models.CharField(max_length=150, unique=True)
#     email = models.EmailField(max_length=255, unique=True)
#     password = models.CharField(max_length=150)
#     address = models.TextField(max_length=500)
#     phone = models.IntegerField()
#     created_at = models.DateTimeField(auto_now_add=True)


class Slider(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    # image = models.ImageField(upload_to='sliders/')
    image = models.CharField(max_length=500)
    
    def __str__(self):
        return self.title


class Category(models.Model):
    name = models.CharField(max_length=50)
    image = models.CharField(max_length=500)
    slug = models.SlugField(max_length=50, unique=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)

    def __str__(self):
        return self.name


class Brand(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):

    RATING_CHOICES = (
        ('★☆☆☆☆', '★☆☆☆☆'),
        ('★★☆☆☆', '★★☆☆☆'),
        ('★★★☆☆', '★★★☆☆'),
        ('★★★★☆', '★★★★☆'),
        ('★★★★★', '★★★★★'),
    )

    name = models.CharField(max_length=100)
    feature = models.BooleanField(default=False)
    availability = models.IntegerField(default=0)
    color = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)  
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    # image = models.ImageField(upload_to='products/%Y/%m/%d/')
    image = models.CharField(max_length=500)
    discount = models.IntegerField(default=0)
    rating = models.CharField(max_length=100, choices=RATING_CHOICES, default='★☆☆☆☆')
    created_at = models.DateTimeField(auto_now_add=True)

    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def product_img(self):
        return mark_safe('<img src="%s" with="50" height="50" />' % (self.image))


    def __str__(self):
        return self.name
    
    
class ProductImages(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.CharField(max_length=200)

    def __str__(self):
        return self.product.name
    

class Review(models.Model):
    RATING_CHOICES = (
        ('★☆☆☆☆', '★☆☆☆☆'),
        ('★★☆☆☆', '★★☆☆☆'),
        ('★★★☆☆', '★★★☆☆'),
        ('★★★★☆', '★★★★☆'),
        ('★★★★★', '★★★★★'),
    )

    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.CharField(max_length=100, choices=RATING_CHOICES, default='★☆☆☆☆')
    comment = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review #{self.pk} for {self.product.name} by {self.user.username}"





class Order(models.Model):
    created_at = models.DateTimeField(default=timezone.now)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=(
        ('pending', 'Pending'),
        ('processing', 'Processing'),
        ('shipped', 'Shipped'),
        ('delivered', 'Delivered'),
        ('canceled', 'Canceled'),
    ), default='pending')

    def __str__(self):
        formatted_created_at = self.created_at.strftime("%Y-%m-%d %H:%M")
        return f"Order =>> Date: {formatted_created_at}, Amount: {self.total_amount}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.quantity} x {self.product.name}, {self.order}"


class ShippingAddress(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=20)
    phone_number = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.first_name} - {self.address}, {self.city}, {self.country}, {self.phone_number}"


# 111111111111111111
# class Cart(models.Model):
#     userId = models.ForeignKey(User, on_delete=models.CASCADE)
#     quantity = models.IntegerField()


# class CartItems(models.Model):
#     userId = models.ForeignKey(User, on_delete=models.CASCADE)
#     productId = models.ForeignKey(Product, on_delete=models.CASCADE)
#     quantity = models.IntegerField()
#     created_at = models.DateTimeField(auto_now_add=True)



# 22222222222222222222222222

# class Order(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     total_amount = models.DecimalField(max_digits=10, decimal_places=2)
#     is_completed = models.BooleanField(default=False)
#     created_at = models.DateTimeField(default=timezone.now)

#     def __str__(self):
#         return f"Order #{self.pk} - User: {self.user.username}"

# class OrderItem(models.Model):
#     order = models.ForeignKey(Order, on_delete=models.CASCADE)
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     quantity = models.PositiveIntegerField(default=1)
#     unit_price = models.DecimalField(max_digits=10, decimal_places=2)

#     def __str__(self):
#         return f"OrderItem #{self.pk} - Order: {self.order.pk}, Product: {self.product.name}"
    


# class ShippingAddress(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     address = models.CharField(max_length=200)
#     city = models.CharField(max_length=100)
#     state = models.CharField(max_length=100)
#     postal_code = models.CharField(max_length=20)
#     country = models.CharField(max_length=100)

#     def __str__(self):
#         return f"{self.address}, {self.city}, {self.state}, {self.postal_code}, {self.country}"

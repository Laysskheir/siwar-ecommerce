from rest_framework import serializers
from .models import *

# create Serializer

# class UserSerializer(serializers.Serializer):
#     class Meta:
#         model = User
#         fields = "__all__"

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    brand = BrandSerializer()  # Nested serializer for brand
    category = CategorySerializer()  # Nested serializer for category

    class Meta:
        model = Product
        fields = "__all__"


class SlidersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slider
        fields = ["title", "description", "image"]

class ProductImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImages
        fields = "__all__"

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'

class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = ['phone', 'firstName', 'lastName', 'country', 'streetAddress', 'city', 'state', 'postalCode']

class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(many=True, read_only=True)  # Use the correct serializer here

    class Meta:
        model = Order
        fields = '__all__'

# class OrderSerializer(serializers.ModelSerializer):
#     orders = serializers.SerializerMethodField(read_only=True)

#     class Meta:
#         model = Order
#         fields = '__all__'

#     def get_orders(self, obj):
#         items = obj.orderitem_set.all()
#         serializer = OrderSerializer(items, many=True)
#         return serializer.data

from django.shortcuts import render
from .models import *
from rest_framework.response import Response
from api.serializers import ProductSerializer, SlidersSerializer, ProductImagesSerializer, CategorySerializer,  OrderItemSerializer 
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from decimal import Decimal



# Create your views here.
# @csrf_exempt
# def create_data(request):
#     if request.method == "POST":
#         # Use JSONParser to parse incoming JSON data
#         data = JSONParser().parse(request)
#         serializer = UserSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)


# @csrf_exempt
# def check_user(request, email):
#     try:
#         user = User.objects.filter(email=email)
#     except:
#         return HttpResponse(status=404)

#     if request.method == "GET":
#         serializer = UserSerializer(user, many=True)
#         return JsonResponse(serializer.data, safe=False)

@api_view(["GET"])
def home(request):
    if request.method == "GET":
        products = Product.objects.filter(feature=True)

        product_serializer = ProductSerializer(products, many=True)

        sliders = Slider.objects.all()
        sliders_serializer = SlidersSerializer(sliders, many=True)

        categories = Category.objects.all()
        categories_serializer = CategorySerializer(categories, many=True)
        data = {
            "products": product_serializer.data,
            "sliders": sliders_serializer.data,
            "categories": categories_serializer.data,

        }

        return Response(data)


@api_view(["GET"])
def product_list(request):
    if request.method == "GET":
        products = Product.objects.all()

        serializer = ProductSerializer(products, many=True)

        return Response(serializer.data)



@api_view(["GET"])
def product_detail(request, slug):
    if request.method == "GET":
        product = Product.objects.get(slug=slug)
        serializer = ProductSerializer(product)
        product_images = ProductImages.objects.filter(product=product)
        image_serializer = ProductImagesSerializer(product_images, many=True)
        return Response({"product": serializer.data, "images": image_serializer.data})
    

@api_view(["POST"])
def addOrderItems(request):

    data = request.data
    print("Received data:", data)  

    orderItems = data.get('orderItems')

    if not orderItems:
        return Response({'message': 'No Order Items'}, status=400)

    total_amount = 0 
    for item in orderItems:
        product_id = item.get('id')
        product_price = Decimal(item.get('price'))
        quantity = item.get('quantity')
        total_amount += product_price * Decimal(quantity)


    shipping_address_data = data.get('shippingAddress')
    print("Shipping address data:", shipping_address_data)  # Print shipping address data

    shipping_address = ShippingAddress.objects.create(
        first_name=shipping_address_data.get('firstName'),
        last_name=shipping_address_data.get('lastName'),
        country=shipping_address_data.get('country'),
        address=shipping_address_data.get('streetAddress'),
        city=shipping_address_data.get('city'),
        state=shipping_address_data.get('state'),
        postal_code=shipping_address_data.get('postalCode'),
        phone_number=shipping_address_data.get('phone')
    )

    order = Order.objects.create(
        total_amount=total_amount,
        status='pending'
    )

    for item in orderItems:
        product = Product.objects.get(id=item.get('id'))
        order_item = OrderItem.objects.create(
            order=order,
            product=product,
            quantity=item['quantity'],
            price=item['price']
        )

    return Response({'message': 'Order created successfully'}, status=201)



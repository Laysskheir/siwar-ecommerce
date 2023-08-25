from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("product-list/", views.product_list, name="product-list"),
    path("product-detail/<slug:slug>/", views.product_detail, name="product-detail"),

    path("order/", views.addOrderItems, name="order"),

]

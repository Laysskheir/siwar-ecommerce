# Generated by Django 4.2.2 on 2023-08-05 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_cart_userid_alter_cartitems_userid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slider',
            name='image',
            field=models.CharField(max_length=500),
        ),
    ]

# Generated by Django 4.2.2 on 2023-08-07 05:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_slider_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='image',
            field=models.CharField(default=1, max_length=500),
            preserve_default=False,
        ),
    ]

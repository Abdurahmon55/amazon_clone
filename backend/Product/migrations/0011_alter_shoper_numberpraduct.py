# Generated by Django 5.0.1 on 2024-02-17 04:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Product', '0010_shoper'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoper',
            name='numberPraduct',
            field=models.IntegerField(),
        ),
    ]
# Generated by Django 4.1.1 on 2022-10-10 04:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_alter_programmer_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skill',
            name='slug',
            field=models.SlugField(unique=True),
        ),
    ]

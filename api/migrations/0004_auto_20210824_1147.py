# Generated by Django 3.1.4 on 2021-08-24 11:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_company_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Company',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]

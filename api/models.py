from django.db import models
from django.dispatch import receiver
from django.db.models.signals import (
    pre_save, post_save
)
from django.contrib.auth.models import User as DjangoUser
from django.core.serializers import serialize

import json


class NameModel(models.Model):
    email = models.EmailField()

    class Meta:
        abstract = True


class User(NameModel):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'My Users'


class CompanyQuerySet(models.QuerySet):
    def serialize(self):
        """Create a json representation of the queryset"""
        list_values = list(self.values('id', 'name', 'email', 'address',
                                       'employee_size', 'phone_number', 'website',
                                       'is_favorite', 'logo'))
        return json.dumps(list_values, indent=4)


class CompanyManager(models.Manager):
    def get_queryset(self):
        return CompanyQuerySet(self.model, using=self._db)


class Company(NameModel):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    employee_size = models.PositiveIntegerField(default=0)
    phone_number = models.CharField(max_length=20)
    website = models.URLField()
    is_favorite = models.BooleanField(default=False)
    logo = models.ImageField(upload_to='companies', blank=True)

    objects = CompanyManager()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

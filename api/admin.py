from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import User, Company

import string
import secrets
from random import randint


def random_string(n=10, chars=string.ascii_letters + string.digits):
    return ''.join([secrets.choice(chars) for _ in range(n)])


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'username', 'email',
                    'password_', ]
    search_fields = ['username', 'email']

    def password_(self, obj):
        return random_string(n=randint(10, 15))

    password_.short_description = 'Password'


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'email', 'address',
                    'employee_size', 'logo_',
                    'phone_number',
                    'website', 'is_favorite']
    list_display_links = ['id', 'name']
    search_fields = ['name', 'email', 'address',
                     'phone_number']
    filter_fields = ['is_favorite']
    list_editable = ['is_favorite']

    def logo_(self, obj):
        if obj.logo:
            return mark_safe(f'''
                <a href={obj.logo.url} title={obj.name}>
                    <img src={obj.logo.url} heiht="100px" width="100px">
                </a>
            ''')
        return ''

    logo_.short_description = 'Logo'

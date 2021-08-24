from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_POST
from rest_framework.viewsets import ModelViewSet

import json

from .models import User, Company
from .serializers import (
    UserSerializer, CompanySerializer
)


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CompanyViewSet(ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


def favorite_componies_view(request):
    companies = Company.objects.filter(is_favorite=True)
    return JsonResponse({
        'favorite': json.loads(companies.serialize()),
    })


@require_POST
def set_is_favorite(request):
    data = json.loads(request.body)
    is_favorite = data['isFavorite']
    id_ = data['id']
    company = Company.objects.get(id=id_)
    company.is_favorite = is_favorite
    company.save()
    return JsonResponse({
        'is_favorite': is_favorite,
        'id': id_
    })


@require_POST
def search_company(request):
    data = json.loads(request.body)
    search = data['search']
    companies = Company.objects.filter(name__icontains=search)
    print(companies)

    return JsonResponse({
        'companies': json.loads(companies.serialize())
    })


@require_POST
def login_view(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')

    if username is None or password is None:
        return JsonResponse({
            'detail': 'Please provide username and password.'
        }, status=400)

    user = authenticate(username=username, password=password)

    if user is None:
        return JsonResponse({
            'detail': 'Invalid credentials.'
        }, status=400)

    login(request, user)
    return JsonResponse({
        'detail': 'Successfully logged in.'
    })


def logout_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({
            'detail': 'You\'re not logged in.'
        }, status=400)

    logout(request)
    return JsonResponse({
        'detail': 'Successfully logged out.'
    })


@ensure_csrf_cookie
def session_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({
            'isAuthenticated': False
        })

    return JsonResponse({
        'isAuthenticated': True
    })


def whoami_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({
            'isAuthenticated': False
        })

    return JsonResponse({
        'username': request.user.username
    })

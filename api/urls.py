from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (
    UserViewSet, CompanyViewSet,
    favorite_componies_view, set_is_favorite,
    search_company
)


router = DefaultRouter()
router.register('user', UserViewSet)
router.register('company', CompanyViewSet)


from . import views

urlpatterns = [
    path('', include(router.urls)),
    path('favorite/', favorite_componies_view, name='favorite'),
    path('set_is_favorite/', set_is_favorite, name='set_is_favorite'),
    path('search_company/', search_company, name='search_company'),
    path('login/', views.login_view, name='api-login'),
    path('logout/', views.logout_view, name='api-logout'),
    path('session/', views.session_view, name='api-session'),
    path('whoami/', views.whoami_view, name='api-whoami'),
]

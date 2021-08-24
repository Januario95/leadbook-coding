from django.contrib import admin
from django.shortcuts import render
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


def index_view(request):
    return render(request, 'build/index.html')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', index_view, name='index'),
    path('auth-login/', include('rest_framework.urls')),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

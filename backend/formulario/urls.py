from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import FormularioViewSet

router = DefaultRouter()
router.register(r'formulario', FormularioViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

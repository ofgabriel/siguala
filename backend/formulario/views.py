from rest_framework.mixins import (
    CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
)
from rest_framework.viewsets import GenericViewSet
from rest_framework import permissions
from .models import Formulario
from .serializers import FormularioSerializer

class FormularioViewSet(GenericViewSet,  # generic view functionality
                     CreateModelMixin,  # handles POSTs
                     RetrieveModelMixin,  # handles GETs for 1 Company
                     UpdateModelMixin,  # handles PUTs and PATCHes
                     ListModelMixin):  # handles GETs for many Companies

      serializer_class = FormularioSerializer
      queryset = Formulario.objects.all()
      #permission_classes = [permissions.IsAuthenticated]

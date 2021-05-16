from django.db import models
from .validators import *

# Create your models here.
class Empresa(models.Model):
    nome = models.CharField(max_length=255)
    cnpj = models.CharField(max_length=14, verbose_name='CNPJ', validators=[validar_cnpj])
    email = models.EmailField(verbose_name='E-mail')

    def __str__(self):
      return self.nome

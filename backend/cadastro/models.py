from django.db import models

# Create your models here.
class Empresa(models.Model):
    nome = models.CharField(max_length=255)
    cnpj = models.CharField(max_length=12, verbose_name='CNPJ')
    email = models.EmailField(verbose_name='E-mail')

    def __str__(self):
      return self.name

from django.db import models

class Formulario(models.Model):
    conteudo = models.JSONField(null=True)

    def __str__(self):
      return self.nome

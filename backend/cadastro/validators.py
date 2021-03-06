from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

def digito_verificador(digitos, posicao):
  pesos = [5,6,7,8,9,2,3,4,5,6,7,8,9,0] if posicao==2 else [6,7,8,9,2,3,4,5,6,7,8,9,0,0]
  soma = 0
  for d, p in zip(digitos, pesos):
    soma += d*p
  digito = soma % 11
  digito = 0 if digito == 10 else digito
  return digito

def validar_cnpj(cnpj):
  if len(cnpj) == 14:
    if cnpj.isnumeric():
      digitos = [int(d) for d in cnpj]
      if digitos[12] == digito_verificador(digitos, 1):
        if digitos[13] == digito_verificador(digitos, 2):
          return True
  raise ValidationError(
    _('%(cnpj)s não é um CNPJ válido'),
    params={'cnpj': cnpj},
  )

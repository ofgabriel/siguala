from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

def digito_verificador(digitos, posicao):
  if posicao == 2:
    pesos = [5,6,7,8,9,2,3,4,5,6,7,8,9,0]
  else:
    pesos = [6,7,8,9,2,3,4,5,6,7,8,9,0,0]
  soma = 0
  for d, p in zip(digitos, pesos):
    soma += d*p
  return soma % 11

def validar_cnpj(cnpj):
  if len(cnpj) == 14:
    if cnpj.isnumeric():
      digitos = [int(d) for d in cnpj]
      if digitos[12] == digito_verificador(digitos, 1):
        if digitos[13] == digito_verificador(digitos, 2):
          return True

  cnpj = digito_verificador(digitos, 1)
  raise ValidationError(
    _('%(cnpj)s não é um CNPJ válido'),
    params={'cnpj': cnpj},
  )



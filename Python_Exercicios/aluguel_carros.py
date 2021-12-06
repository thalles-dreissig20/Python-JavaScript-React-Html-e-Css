aluguel = float(input('Quantidade de km rodados: '))
dias = int(input('Números de dias em que o carro foi alugado: '))
pago = (dias * 60) + (aluguel *0.15)
print('O total a pagar é R${:.2f}'.format(pago))


"""  ALUGUEL DE CARROS  """
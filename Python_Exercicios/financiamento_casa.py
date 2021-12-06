casa = float(input('Qual o valor da casa: '))
salario = float(input('Qual o salario do comprador: '))
anos = int(input('Quantos anos de financiamento: '))
prestacao = casa / (anos * 12)
minimo = salario * 30 / 100 
print('Para pagar essa casa a prestação sera de {}'.format(prestacao))
if prestacao <= minimo:
    print('Emprestimo pode ser concedido')
else:
    print('Emprestimo negado! ')


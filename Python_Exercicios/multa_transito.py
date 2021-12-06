velocidade = float(input('Qual a velocidade: '))
if velocidade > 80:
    print('Multado')
    multa = (velocidade-80)* 7
    print('voçe deve pagar uma multa de {} R$'.format(multa))
print('Tenha um bom dia, dirija com segurança!')
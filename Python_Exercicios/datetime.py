from datetime import date

atual = date.today().year
nasc = int(input('Em qual ano voçê nasceu: '))
idade = atual - nasc
print('Quem nasceu em {} tem {} anos'.format(nasc, idade))
if idade == 18:
    print('Voçê se alista esse ano')
elif idade > 18:
        saldo = 18 - idade
        print('Voçê ja deveria ter se alistado!!')
elif idade < 18:
             saldo = idade - 18
             print('Ainda faltam {} anos para voce se alistar'.format(saldo))

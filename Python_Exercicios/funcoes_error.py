def leiaInt(msg):
   while True:
       try:
           n = int(input(msg))
       except (ValueError, TypeError):
           print('Erro: Por favor, digite um numero valido')
           continue
       except (KeyboardInterrupt):
           print('Entrada interromepida pelo usuario')
           return 0
       else:
           return n
       
def leiaFloat(msg):
   while True:
       try:
           n = float(input(msg))
       except (ValueError, TypeError):
           print('Erro: Por favor, digite um numero valido')
           continue
       except (KeyboardInterrupt):
           print('Entrada interromepida pelo usuario')
           return 0
       else:
           return n
              
       
       
num1 = leiaInt('digite um numero inteiro: ')
num2 = leiaFloat('digite um numero real: ')
print(num1, num2 )
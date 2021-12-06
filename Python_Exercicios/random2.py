from random import randint
pc = randint(0 , 5)
print('-=-' * 10)
print('Vou pensar em um número de 0 a 5. Tente adivinhar...')
print('-=-' * 10)
jogador = int(input('Em que número eu pensei? '))
if jogador == pc:
    print('Parabéns, você acertou!')
else:
    print('Desculpe, voçê errou! Pensei no número {}'.format(pc))



from math import radians, sin, cos, tan
angulo = float(input('Digita o angulo que voce deseja: '))
seno = sin(radians(angulo))
print('O angulo de {} tem o seno de {:.2f}'.format(angulo, seno))
coseno = cos(radians(angulo))
print('O angulo de {} tem o cosseno de {:.2f}'.format(angulo, coseno))
tangente = tan(radians(angulo))
print('O angulo de {} tem a tangente de {:.2f}'. format(angulo, tangente))


"""   DESCOBRIR O SENO COSSENO E A TANGENTE   """
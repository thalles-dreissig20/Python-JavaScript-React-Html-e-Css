def area(larg, comp):
    a = larg * comp
    print(f'A dimensão é {a}')

print('Controle de terrenos')
print('-' * 20)
l = float(input('qual a largura do terreno: '))
c = float(input('qual o comprimento do terreno: '))
area(l , c)
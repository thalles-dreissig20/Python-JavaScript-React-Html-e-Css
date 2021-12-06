sexo = str(input('Digite seu sexo: (M/F) ')).strip().upper()[0]
print(sexo)
while sexo not in 'MmFf':
    sexo = str(input('Valor invalido, tente novamente: ')).upper().strip()
print('Sexo {} registrado com sucesso!'.format(sexo))
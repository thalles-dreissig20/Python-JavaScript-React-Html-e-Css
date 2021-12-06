from random import shuffle
aluno1 = str(input('Digite o primeiro nome: '))
aluno2 = str(input('Digite o segundo nome: '))
aluno3 = str(input('Digite o terçeiro nome: '))
aluno4 = str(input('Digite o quarto nome: '))

lista = [aluno1, aluno4, aluno3, aluno2]
shuffle(lista)

print('A ordem de apresentação será: ')
print(lista)


"""   EMBARALHANDO A LISTA COM RANDOM   """
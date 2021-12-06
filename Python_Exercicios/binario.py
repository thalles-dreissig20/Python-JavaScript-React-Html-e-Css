num = int(input('Digite um número: '))
print('''Escolha uma das opções para converter !
[ 1 ] Para saber o número em BINARIO
[ 2 ] Para saber o número em OCTAL
[ 3 ] Para saber o número em HEXADECIMAL''')
opcao = int(input('Sua opção é : '))
if opcao == 1:
    print('Convertido em binario é {}'.format(bin(num)[2:]))
elif opcao == 2:
    print('Convertido em octal é {}'.format(oct(num)[2:]))
elif opcao == 3:
    print('Convertido em hexadecimal é {}'.format(hex(num)[2:]))



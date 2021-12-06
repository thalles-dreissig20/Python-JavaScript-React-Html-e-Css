# Calcular todos em:
# KM HM DAM M DM CM MM

var = float(input("Digite um valor: "))
print("O valor em centimetros fica {}".format(var / 10000))
print("O valor e milimetros fica {}".format(var / 1000))
print("O valor em decimetro fica {}".format(var * 10))
print("O valor em metros fica {}".format(var * 100))
print("O valor em decametro fica {}".format(var / 100))
print("O valor em micrometro fica {}".format(var / 1e+8))
print("O valor em Kilometro fica {}".format(var * 1000))
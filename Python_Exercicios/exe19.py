import time

while 1:
    x = time.localtime()
    print("segundos: " + str(x[5]))
    time.sleep(2)
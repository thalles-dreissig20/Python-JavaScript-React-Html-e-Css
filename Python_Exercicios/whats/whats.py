# Baixar o python no site oficial
# Adicionar o PATH na hora da instalação
# baixar o selenium atraves do CMD "pip install selenium"
# Baixar o chrome driver no site "https://chromedriver.chromium.org/"
# Cuidar para que seja a mesma versão do chrome atual

from selenium import webdriver
import time

class robo:
    def __init__(self):
        self.mensagem = "bom dia"
        options = webdriver.ChromeOptions()
        options.add_argument('lang=pt-br')
        self.driver = webdriver.Chrome(executable_path=r"C:\Users\User\Desktop\whats\chromedriver.exe")
        self.driver.get('https://web.whatsapp.com')
        time.sleep(25)

# VER SE TEM NOTIFICAÇÃO
    def notifica(self):
        notificacao = self.driver.find_element_by_xpath("//span[@class='_23LrM']").text
        if notificacao >= 1:
            contato = self.driver.find_element_by_class_name('_23LrM')
            time.sleep(5)
            contato.click()


            # ENVIAR A MENSAGEM
            chatbox = self.driver.find_element_by_class_name('_2vbn4')
            time.sleep(5)
            chatbox.click()
            chatbox.send_keys(self.mensagem)
            botao = self.driver.find_element_by_xpath("//span[@data-icon='send']")
            time.sleep(5)
            botao.click()
            time.sleep(5)
        else:
            print ("No momento não temos notificação...")

bot = robo()
bot.notifica()

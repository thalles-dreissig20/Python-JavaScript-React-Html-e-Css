from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

navegador = webdriver.Chrome(ChromeDriverManager().install())

navegador.get('http://google.com/')
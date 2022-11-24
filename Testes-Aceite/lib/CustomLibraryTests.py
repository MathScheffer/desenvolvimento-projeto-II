from robot.libraries.BuiltIn import BuiltIn
from selenium.webdriver.common.by import By

SL = BuiltIn().get_library_instance("SeleniumLibrary")

class CustomLibraryTest(object):
    def __init__(self):
        pass

    def input_cadastro(self,id_nome):
        return SL.find_element("//section[@id='cadastro-form']//input[@id='"+id_nome+"']")

    def adicionar_oferta(self,Oferta:str):
        try:
            oferta = SL.find_element(By.XPATH, "//div/a[contains(text(),'"+Oferta+"')]/../..//../div/button/span[contains(text(),'eu quero')]")        
            oferta.click()
        except(ValueError):
            print(ValueError)


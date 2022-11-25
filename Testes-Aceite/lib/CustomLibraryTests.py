from robot.libraries.BuiltIn import BuiltIn
from selenium.webdriver.common.by import By

SL = BuiltIn().get_library_instance("SeleniumLibrary")

class CustomLibraryTests(object):
    def __init__(self):
        pass

    def input_cadastro(self,id_nome):
        return SL.find_element("//section[@id='cadastro-form']//input[@id='"+id_nome+"']")

    def click_button_by_text(self,text):
        SL.find_element("//button[contains(text(),'" + text + "')]").click()

    def write_text_input_cadastro(self, id_nome, text):
        SL.find_element("//section[@id='cadastro-form']//input[@id='"+id_nome+"']").send_keys(text)

    def click_on_editar_button(self, nome_usuario):
        SL.find_element("//span[contains(text(),'" + nome_usuario + "')]/..//a[contains(text(),'editar')]").click()

    def click_on_excluir_button(self, nome_usuario):
        SL.find_element("//span[contains(text(),'" + nome_usuario + "')]/..//button[text()]").click()

    def click_card_add_rotina(self):
        SL.find_element("//div[contains(@class,'card-adicionar-rotina')]").click()

    def click_rotina(self, day):
        SL.find_element("//div[@class='card-rotina-container']//a[contains(text(),'"+ day +"')]").click()

    def click_add_exercicio(self):
        SL.find_element("//div[@class='card-adicionar-exercicio']").click()

    def write_nome_exercicio(self,nome, index):
        SL.find_elements("//textarea")[int(index)].send_keys(nome)

    def write_input_exercicio(self,id_el,text):
        SL.find_element("//input[@id='" + id_el + "' and @value='']").send_keys(text);

    def click_button_by_text(self,text):
        SL.find_element("//button[contains(text(),'" + text + "')]").click()
    
    def click_button_by_text_and_index(self,text,index):
        SL.find_elements("//button[contains(text(),'" + text + "')]")[int(index)].click()

    def force_click_button(self):
        try:
            SL.find_element("button[contains(text(),'Fechar')]").click()
        except(Exception):
            SL.find_element("button[contains(text(),'Fechar')]").click()

export default class TratamentoErros {

    constructor(erro){
        this.erro = erro
        this.message = "";
        this.parametrosInformados = "";

        this.setaTipoErroEInformacoes();
    }

    setaTipoErroEInformacoes(){
        
        if(this.erro.hasOwnProperty("uniqueError")){
            this.erro = this.erro.uniqueError
            this.message = this.erro.message;

            this.parametrosInformados = Object.entries(this.erro.parametro_informado)
            
        }
    }

    mensagemErro(){
        if(this.message = "O parametro informado ja esta sendo utilizado."){
            this.message = "Os seguintes dados ja estao sendo utilizados: "
            for (const obj of this.parametrosInformados){
                this.message  = this.message +  obj.join("= ")
            }
        }

        return this.message
    }
}
export default class TratamentoErros {

    constructor(erro){
        this.erro = erro
        this.message = "";
        this.parametrosInformados = "";
        this.arrMessage = [];
        this.setaTipoErroEInformacoes();
    }

    setaTipoErroEInformacoes(){
      
        if(this.erro.hasOwnProperty("uniqueError")){
            this.erro = this.erro.uniqueError
            this.message = this.erro.message;
            
            this.parametrosInformados = Object.entries(this.erro.parametro_informado)
            
        }else{
            const arrAtributosUsuario = 
            ["nome" ,"senha","whatsapp","idade","peso","sexo","objetivo","rotina"]
            for (const obj of Object.entries(this.erro)){
                let k = obj[0]
                console.log(k)
                console.log(this.erro[k])
                if(arrAtributosUsuario.includes(k)){
                    this.arrMessage.push(this.erro[k])
                }

                console.log(this.arrMessage)
                
            }
        }
    }

    mensagemErro(){
        if(this.message == "O parametro informado ja esta sendo utilizado."){
            this.message = "Os seguintes dados ja estao sendo utilizados: "
            for (const obj of this.parametrosInformados){
                this.message  = this.message +  obj.join("= ")
            }
        }else if(this.arrMessage){
            this.message = this.arrMessage.join(",")
        }

        console.log(this.message)
        return this.message
    }
}
/**
 * limpa as chaves vazias do formulario, impedindo que um formulario com chaves vazias seja
 * enviado para a api
 * @returns void
 * 
 */
 exports.imparChavesVazias = (obj) => {
    let body = obj;

    for(var a in body){
        if(!body[a]){
            delete body[a]
        }
    }

    return body
}
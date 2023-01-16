
const regexValidate= (req, regexIn)=>{
    /*
        faz a checagem de todos os regex retornando o valor
        pedido por cada função
    */
    const body = req.body
    const { password } = body    
    const regex = regexIn
    const result = password.replace(regex, "");
    const resultLength = result.length
    return resultLength
}

const min_number= 3
const min_characters= 8 
const min_specialCharacters= 3 
const min_lowerCase= 3
const min_upperCase= 3


//  @ letras minusculas
const lowercase  = async (req, res, next) => {      
    /*
        filtro por um regex que filtra todos os LETRAS MINUSCULAS
        e conta se a quantidade e maior que 3, caso não for
        retorna um ERRO   
    */
    const body = req.body

    body["verify"]= false
    body['noMatch']= [] 

    const tamanho = regexValidate(req, /[^a-z]/g)

    if(tamanho < min_lowerCase){
        body['noMatch'].push("lowercase")
    }      
    next()
}


// @ letras maiusculas
const uppercase  = async (req, res, next) => {
    /*
        filtro por um regex que filtra todos os LETRAS MAIUSCULAS
        e conta se a quantidade e maior que 3, caso não for
        retorna um ERRO   
    */
    const body = req.body    
    const tamanho = regexValidate(req, /[^A-Z]/g)

    if(tamanho < min_upperCase){
        body['noMatch'].push("uppercase")
    }     
    next() 
}


// @ quantidade de digitos minimo 8
const digits  = async (req, res, next) => {
    /*
        Conta quantos digitos a input do usuario tem 
    */    
    const body = req.body
    const { password } = body

    const result = password.length; 
    if(result  < min_characters+1){
        body['noMatch'].push("minSize")
    } 
    next() 
}


// @ caracteres especiais minimo 2 characters
const specialChars  = async (req, res, next) => {
    /*
    filtro por um regex que filtra todos os CHARACTERES ESPECIAIS
    e conta se a quantidade e maior que 3, caso não for
    retorna um ERRO   
    */
    const body = req.body    
    const tamanho = regexValidate(req, /[\da-zA-Z]/g)

    if(tamanho < min_specialCharacters){
        body['noMatch'].push("minSpecialCharactes")
    }    
    next() 
}

const numbers  = async (req, res, next) => {
    /*
        filtro por um regex que filtra todos os númerais
        e conta se a quantidade e maior que 3, caso não for
        retorna um ERRO   
    */
    const body = req.body    
    const tamanho = regexValidate(req, /[^0-9]/g)
    
    if(tamanho < min_number){
        body['noMatch'].push("notNumbers")
    }     
    next() 
}

//  @ NÃO PODE SEQUENCIA DE MESMO CARACTER
const specialCharsNoRepeat  = async (req, res, next) => {
    /*
        passa por todos os characters e se ele não for igual ele passa e guarda ele
        em uma variavel,  caso o ultimo caracter for igual ao primeiro ele set a 
        variavel  status para TRUE gerando um erro        
    */

    const body = req.body
    const { password } = body
    
    let duplicate= '';
    let status = false

    const repeat= password.split("").forEach(noRepeat => {
        if(noRepeat === duplicate){            
            status= true
        }else{
            duplicate= noRepeat
        }
    })  

    if(status){
        body['noMatch'].push("noRepeted")
    }  
    delete body['password']
    next() 
}

module.exports= {lowercase,
     uppercase, 
     digits, 
     specialChars, 
     numbers,
     specialCharsNoRepeat
    }
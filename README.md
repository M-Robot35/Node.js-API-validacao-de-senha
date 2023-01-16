<!-- THIAGO TELES DE SOUZA - 14/01/2023 : 21:11 -->

# Requisitos minimos para iniciar a  API

[1] Necessario ter o Git instalado na sua maquina, caso não tenha pode estar fazendo o Download no link abaixo:
    https://git-scm.com/downloads

[2] Necessario ter o Node.js, download no link abaixo: 
    https://nodejs.org/en/download/

Após ter esses programas instalados, você somente precisa estar executando o programa dentro da pasta
de nome    START_API.sh   para que instale automaticamente as libs necessarias para a API estar rodando,
ela já iniciará  na porta 4000

http://localhost:4000

pode estar testando os campos usando o  Insomnia para fazer as requisições
download Insomnia:  https://insomnia.rest/download


<!-- ROTAS  -->
# API tem somente essa rota
http://localhost:4000/verify

as requisições são enviados via POST, com os parametros no body em formato JSON com apenas o parametro 
passord.

exemplo:

{
  "password": "TesteSenhaForte!123&*"
}


<!-- Exigências para validação da senha -->

-- Deve haver letras MAIUSCULAS, minusculas, caracteres especiais, números inteiros, 
-- Não pode haver letras repetidas em sequência -> exemplo:  aab= INVALIDO  aba= VALIDO
-- Deve haver no minimo 3 números
-- Deve haver no minimo 3 caracteres especias
-- Letras Minusculas 3 ou mais
-- Letras Maiusculas 3 ou mais
-- Número exigido para uma senha segura 8 caracteres


retorno da API sera sempre um verify  que se estiver tudo OK  retornara  TRUE  caso contrario  False
caso VERIFY for FALSE  retornara um noMATCH que te informara em quais campos você deve corrigir para
que sua senha validada, e  trazer mais segurança,  quando sua senha estiver ok
noMATCH te retornara um array vazio .

<!-- TESTES -->

# minCharactes
{
  "password": "TesteSenhaForte!129&"
}

# minNumbers
{
  "password": "TesteSenhaForte!12&*"
}

# minUpercase
{
  "password": "TesteyenhaForte!129&*"
}

# noRepeat
{
  "password": "TesteeSnhaForte!129&*"
}

# minCharactes
{
  "password": "TeSFor!129*"
}


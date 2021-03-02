O Projeto consiste em um sistema de cálculo de NPS para avaliação de algum serviço ou produto de uma empresa. O mesmo foi desenvolvido durante a NLW4.

# Configurações Iniciais

## NodeJS Server Start
mkdir server

`yarn init -y`

Adicionar dependências

`yarn add express`

`yarn add @types/express -D`

Criar pasta src

Criar arquivo server.ts dentro de src

`yarn add typescript -D`

Criar arquivo de configurações do typescript

`yarn tsc --init`

Dentro do arquivo tsconfig.json alterar target para es2017 (devido a compatibilidades com os navegadores)

Instalar a dependência abaixo para observar as alterações no servidor e reestartar o server automaticamente

`yarn add ts-node-dev -D`

Criar dentro de package.json para conseguir iniciar o server com o comando `yarn start`

`"scripts": {
    "start": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"
  }`
  
Ferramentas para realização de testes

`yarn add jest @types/jest -D`

`yarn jest --init`

`yarn add ts-jest -D`

`yarn add supertest @types/supertest -D`

Ferramenta para envios de e-mail

`yarn add nodemailer`

`yarn add @types/nodemailer -D`

Ferramenta para customização do formulário

`yarn add handlebars`

Ferramenta para gerenciar as validações

`yarn add yup`

`yarn add express-async-errors`

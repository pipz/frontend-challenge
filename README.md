# Front End Challenge

Deve-se utilizar nossa API para construir uma simples aplicação WEB.

## Requisitos do Sistema

* O sistema deve ser em Angular JS;
* O sistema deve utilizar a biblioteca [Restangular](https://github.com/mgonto/restangular) para interacao com o nosso webserver;
* O sistema deve ter uma view para listar os contatos;
* O sistema deve ter uma view para ver os detalhes do contato;
* O sistema deve permitir alterar o dado do contato;
* O sistema deve permitir inserir um novo contato;
* O sistema deve permitir deletar um contato;


## Detalhes da API

A Api utiliza Basic Auth para aceitar as requisiscoes, deve-se codificar em base64 as chaves no formato "apikey:apisecret" e enviar no Header "Authentication"

ex:
{
	Authentication: 'Basic u183gbnda=='	
}


O endpoit para acesso da API é api.pipz.io/v1/

* GET /contact - Lista os contatos;
* GET /contact/:id - Retorna as informacoes do contato;
* POST /contact - Cria um novo contato, é necessário enviar "email" e "name";
* PATCH /contact/:id - atualiza os dados do contato;


## Detalhes do Web App

### Views

* A primeira view deve mostrar os contatos
* A segunda view deve abrir os detalhes do contato mostrando o nome, email, twitter e o telefone ("name", "email", "twitter" e "phone" no objeto do contato);
* A segunda view deve permitir alterar os dados nome, twitter e telefone (utlizando o metodo PATCH);
* A segunda view deve permitir deletar o contato (exibir uma tela de confirmacao antes de efetuar a exclusão);

### Javascript

* Organização é fundamental na estrutra do app;
* Toda a interacao com o server deve ser feita por meio de um Service;

## Bonus Points

* Quanto mais agradavel a interface melhor.
* Hoje utilizamos [Angular Material](https://material.angularjs.org/latest/) no nosso sistema... ;)

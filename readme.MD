# Mural de Posts

## O que é contrato?

Front = Cliente
    Contrato
Back =  Fornecedor

O contrato ele é o que vai dizer, o que a API, deve ter, fazer, e retornar.
Ele não vai falar COMO ELA FAZ

//Cozinhar massa, tem que ter açucar, e tem que retornar uma massa aldente cozida.

Rota de listar usuario;
e ela faz uma listagem de usuario
Tem que retornar uma lista de usuarios.
ela pode receber um filtro (id de usuarios, idade dos usuarios, cidade de nascimento)

## ROTAS

```
base: /blog
[
    {
        path: "/"
        method: GET
        name: List Posts
        request:{
            query: {
                id_user: "string"
            }
        }
        response: [{
            id:'EXAMPLE123', 
            title: 'example', 
            description: 'example', 
            relation_id: 'EXAMPLE123'
            }]
    },
    {
        path: "/"
        method: POST
        name: Create Post
        request:{
            body: {
                title: "string",
                description: "string",
            },
            headers: {
                id_user: "EXAMPLE123"
            }
        }
        response: {
            id:'EXAMPLE123', 
            title: 'example', 
            description: 'example', 
            relation_id: 'EXAMPLE123'
        }
    },
    {
        path: "/:id"
        method: DELETE
        name: Delete Post By ID
        request:{
            params: {
                id: "string"
            }
        }
        response: no_response
    }
]

```


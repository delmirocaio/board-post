document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
})

function updatePosts(relation_id){

    relation_id = document.getElementById("IDinput").value;

    fetch(`http://localhost:3000/api/blog?id_user=${relation_id}&adminCode=123`, {
        headers: new Headers({
            'content-type': 'application/json',
        })
    }).then(res => {
        return res.json()
    }).then(posts => {

        if (!posts) return false;
        
        let postElements = '';

        posts.forEach((post) => {
            let postElement = `<div id=${post.id} class="card mb-4">
                                <div class="card-header">
                                    <button type="button" class="btn-close" aria-label="Close" onclick="deletar('${post.id}')">X</button>
                                    <h5 class="card-title">${post.title}</h5>
                                </div>

                                <div class="card-body">
                                    <div class="card-text">${post.description}</div>
                                </div>
                            </div>`
            
            postElements += postElement;
        })

        document.getElementById("posts").innerHTML = postElements;
    })
}

function newPost(){
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;
    let relation_id = document.getElementById("IDinput").value;

    let post = {
        title,
        description,
        relation_id
    };

    const options = {
        method: "POST",
        headers: new Headers({
            'content-type': 'application/json',
            'id_user': relation_id
        }),
        body: JSON.stringify(post)
    }

    fetch("http://localhost:3000/api/blog?adminCode=123", options).then(res => {
        console.log(res);

        updatePosts();

        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
    })
}

function deletar(id){

    let relation_id = document.getElementById("IDinput").value;

    console.log('delete id:: ', id)
    const options = {
        method: "DELETE",
        headers: new Headers({
            'content-type': 'application/json',
            'id_user': relation_id
        })
    }

    fetch(`http://localhost:3000/api/blog/${id}?adminCode=123`, options).then(res => res);

    document.getElementById(id).remove();
}


function verificaID(){
// 1. fazer um fetch no servidor para buscar todos os relation_id;
// 2. transformar isso num array;
// 3. comparar os elementos do array com o ID digitado;
// 4. Caso o digitado não for igual, retornar msg indicando invalidez
    // 4.1. caso o digitado seja válido, retornar updatePosts();



    let relation_id = document.getElementById("IDinput").value;

    fetch("http://localhost:3000/api/blog?adminCode=123").then((res) => {
        return res.json()

    }).then((data) => {
        console.log(data)
    })

}









/*
RESTful

ROTA blog

5 VERBOS = POST, GET, DELETE, PATCH, PUT

Criação = POST
Deleta/Remover = DELETE
Listar/Buscar = GET
Atualizar PARCIALMENTE = PATCH
Atualizar TODO O OBJETO = PUT

Criar um blog. POST /blog (PODE PASSAR BODY COM A INFO)
Deletar um blog. DELETE /blog/:ID 
Desativar um blog. DELETE /blog/:ID 
Buscar um blog. GET /blog/:ID
Listar todos os blogs. GET /blog?idade=16 (PODE PASSAR QUERY FILTRANDO)
Atualizar parcialmente. PATCH /blog/:ID (PASSANDO BODY COM O NOVO OBJETO)
Atualizar parcialmente. PATCH /blog/:ID?idade=16 (Desativar todos, active=FALSE)
Atualizar total. PUT /blog/:ID (PASSANDO BODY COM O BODY INTEIRO NOVO)

GET NÃO CRIA NADA, e nem recebe BODY
POST NÃO TEM QUERY
*/
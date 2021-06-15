let url = "https://tt905-backend-pires.herokuapp.com/movies/"

async function callFetchWithGet(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers,
    }

    const output = document.getElementById("json");
    const response = await fetch(url, options);

    if(response.status>=200 && response.status<=300){
        console.log("Funcionou!");
        output.innerHTML = await response.text();
    }else{
        console.log("Deu errado!");
    }



}


async function callFetchWithPost(title, director, year){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body:JSON.stringify({
            'title': title,
            'director': director,
            'year': year
        })
    }
    await fetch(url, options);
}

async function callFetchWithPut(id, title, director, year){   
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body:JSON.stringify({
            'title': title,
            'director': director,
            'year': year
        })
    }
    await fetch(`${url}${id}`, options);
}

async function callFetchWithDelete(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        }
    }
    await fetch(`${url}${id}`, options);
}


function submitPost(){
    const form = document.forms['postForm'];
    const title = form["title"].value;
    const director = form["director"].value;
    const year = form["year"].value;
    callFetchWithPost(title, director, year);
    return false;
}

function submitPut(){
    const form = document.forms['putForm'];
    const id = form["id"].value;
    const title = form["title"].value;
    const director = form["director"].value;
    const year = form["year"].value;
    callFetchWithPut(id, title, director, year);
    return false;
}

function submitDelete(){
    const form = document.forms['deleteForm'];
    const id = form["id"].value;
    callFetchWithDelete(id);
    return false;
}
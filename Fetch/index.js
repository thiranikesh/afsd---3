console.log('run');
function getdata() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            let data ="" 
            for (let i=0; i<json.length; i++ ){
                console.log(json[i]);
                data +=`<div class="card m-2" style="width: 18rem;">
                <div class="card-body ">
                  <h5 class="card-title">ID : ${json[i].id}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${json[i].title}</h6>
                  <p class="card-text">${json[i].body}</p>${json[i].userId}
                </div>
              </div>`
            }
            document.getElementById('display').innerHTML = data
            
        })
        .catch((err) => console.log(err))
        .finally(() => console.log("run finally"))
}

function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err))

}

function getUpdate() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function getDelite() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}
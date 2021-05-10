console.log('');
console.log('Tut 42');

let myBtn = document.getElementById('myBtn')
let content = document.getElementById('content')

//GET REQUEST

//Offline

function getData() {
    url = '35data.txt'
    fetch(url).then((response) => {
        return response.text()
    }).then((data) => {
        console.log(data);
    })
}

//Online

// function getData(){
//     url = 'https://api.github.com/users'
//     fetch(url).then((response)=>{
//         return response.json()
//     }).then((data)=>{
//         console.log(data);
//     })
// }

getData()

function postData() {
    url = 'https://reqres.in/api/products/3'
    data = `{
        "data": {
        "id": 3,
        "name": "true red",
        "year": 2002,
        "color": "#BF1932",
        "pantone_value": "19-1664"
        },
        "ad": {
        "company": "StatusCode Weekly",
        "url": "http://statuscode.org/",
        "text": "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."
        }
        }`
    params = {
        method: 'post',
        headers: {
            'Content-type': 'appliction/json'
        },
        body: data
    }
    fetch(url, params).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
    })
}

postData()

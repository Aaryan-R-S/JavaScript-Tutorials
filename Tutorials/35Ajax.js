let fetchBtn = document.getElementById('fetchBtn')
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {

    //initiate an xhr object
    const xhr = new XMLHttpRequest()
    console.log('Clicked the fetchBtn');

    //open the object
    // xhr.open('GET', '35data.txt', true)
    //OR
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)
    //OR
    // xhr.open('POST', 'https://reqres.in/api/users', true)
    
    xhr.getResponseHeader('Content-type', 'application/json')


    //progress(optional)
    xhr.onprogress = function () {
        console.log('On progress')
    }

    //response is ready(optional)
    xhr.onload = function () {
        if (this.status == 200) {
            console.log(this.responseText)
        }
        else {
            console.error('Some Error Occurred')
        }
    }

    //send request
    params = `{"name":"test2234s","salary":"123","age":"23"}` //for post request only
    xhr.send(params)
    console.log('Done')
}


let popBtn = document.getElementById('popBtn')
popBtn.addEventListener('click', popHandler)

function popHandler() {

    //initiate an xhr object
    const xhr = new XMLHttpRequest()
    console.log('Clicked the popBtn');

    //open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true)

    //response is ready
    xhr.onload = function () {
        if (this.status == 200) {
            let obj = JSON.parse(this.responseText)
            console.log(obj)
            let list = document.getElementById('list')
            str = '';
            for (key in obj) {
                str += ` <li>${obj[key].employee_name} </li>`
            }
            list.innerHTML = str;
        }
        else {
            console.error('Some Error Occurred')
        }
    }

    //send request
    xhr.send()
    console.log('Fetching Employees')
}
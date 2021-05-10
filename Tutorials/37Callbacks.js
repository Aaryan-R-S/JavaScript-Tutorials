console.log('');
console.log('Tut37');

//assume data coming from server
const students = [
    {name:'qwerty', subject:'JS'},
    {name:'popo', subject:'HTML'},
    {name:'lol', subject:'CSS'},
    {name:'topd', subject:'mongoDB'}
]

//enroll() will not allow get() to be executed before enroll() is executed
function enroll(student, callback){
    setTimeout(()=>{
        students.push(student)
        console.log('Enrolled')
        callback()
    },5000)
}

function get(){
    setTimeout(()=>{
        console.log('Fetched')
        let str =''
        students.forEach((element)=>{
            str += ` <li>${element.name}</li>`
            document.getElementById('students').innerHTML= str
        })
    },1000)
}

let newStd = {name:'Sunny', subject:'python'}
enroll(newStd, get)

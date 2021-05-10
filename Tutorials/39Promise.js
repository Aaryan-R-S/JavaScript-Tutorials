console.log('');
console.log('Tut39');

//SYNTAX --
let myPromise = new Promise((Resolve, Reject)=>{
    // "Producing Code" (May take some time)
    
      Resolve(); // when successful
      Reject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );

// Promise : substitute of callbacks
// - resolve
// - reject
// - pending

function x(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error =false;
            if(!error){
                console.log('Promise Resolved')
                resolve()
            }
            else{
                console.log('Promise Rejected');
                reject('Sorry not fufilled')
            }
        },2000)
    })
}

x().then(()=>{
    console.log('ARS: Promise Resolved');
}).catch((error)=>{
    console.log('ARS: Promise Rejected '+error);
})

//alternative of tut 37 -------

//assume data coming from server
const students = [
    {name:'qwerty', subject:'JS'},
    {name:'popo', subject:'HTML'},
    {name:'lol', subject:'CSS'},
    {name:'topd', subject:'mongoDB'}
]

//enroll() will not allow get() to be executed before enroll() is executed
function enroll(student){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            students.push(student)
            console.log('Enrolled')
            let error = false;
            if(!error){
                resolve()
            }
            else{
                reject()
            }
        },5000)
    })
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
enroll(newStd).then(()=>{
    get()
}).catch(()=>{
    console.log('Some Error Occurred')
})

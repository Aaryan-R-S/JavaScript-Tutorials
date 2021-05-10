console.log('');
console.log('Tut 43');

async function qwerty(){
    const response = await fetch ('https://api.github.com/users');
    const users = await response.json();
    return users;
}

qwerty().then((data)=>{
    console.log(data);
})

console.log(qwerty())
console.log('');
console.log('Tut 44');

//Coming from server --assume

let x = undefined
// x= 'erewr'
if(x !=undefined){
    throw new Error('Error')
}
else{
    console.log('No error')
}


//To check error will be or not without disturbing other code

try {
    // let t = 'lol'
    dcfs
} catch (error) {
    console.log('You are giving Error..')
    console.log(error)
    console.log(error.message)
} finally{
    console.log('This will run everytime')
}
const x=19 
if(x==19){
    console.log("Lol")
}
else if(x<19){
    console.log("Hol")
}
else{
    console.log("Gol")
}

const y= '19'  //string also allowed "19"
if(y==19){       //only comparing value irrespective of data type 
    console.log("Lol")
}
else if(y<19){
    console.log("Hol")
}
else{
    console.log("Gol")
}

const z = '19'  
if(z===19){            //=== means comparing boyh value & data type
    console.log("Lol")
}
else if(z<19){
    console.log("Hol")
}
else{
    console.log("Gol")
}

const a=19 
if(a!==19){   //not equal to 
    console.log("Lol")
}
else{
    console.log("Gol")
}

let age =19;
const lisc = false;

//and
if(age>=18 && lisc){
    console.log('You can drive!')
}
else{
    console.log('You cannot drive!')
}

//or
if(age>18 || lisc){
    console.log('You can drive!')
}
else{
    console.log('You cannot drive!')
}

//true & false
console.log(age==45? "Yes":"No")


age=2
switch (age) {
    case 19:
        console.log('Congo')
        break;
    case 20:
        console.log('Bongo')
        break;
    case 21:
        console.log('Longo')
        break;
    default:
        console.log('Jongo')
        break;
}
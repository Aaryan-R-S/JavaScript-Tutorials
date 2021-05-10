// open any website e.g.--  codewithharry.com/videos
//to find all links containing word "python" type--

//use shift enter in console to jump into new line

let x = "python";

//all links with contents
let a =document.links;
console.log(a);

//only link in differnt lines
Array.from(a).forEach((Element)=>{
    let y = Element.href;
    console.log(y);
})

//only link containing "python"
Array.from(a).forEach(function(Element){
    let y = Element.href;
    if(y.includes(x)){
        console.log(y);
    };
});


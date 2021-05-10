console.log("Hi!")
const name = 'ARS'
const say = 'Good Mornning!'
console.log(name +' '+say)

let html;
html = "<h1> LOL</h1>"
console.log(html)
console.log(html.concat(" lolololol")) //add
console.log(html.toUpperCase())
console.log(html.toLowerCase())
console.log(html.length)
console.log(html.indexOf(">"))
console.log(html.lastIndexOf(">"))
//imp. empty spaces counted    
console.log(html.charAt(0))
console.log(html.includes("h"))
console.log(html.includes("H"))
console.log(html.substring(0,4))//start&end
console.log(html.slice(0,4))//start&end
console.log(html.slice(-1))
console.log(html.substr(1,4))//start&length
console.log(html.replace('h1', 'h2'))
console.log(html.replaceAll('h1', 'h2'))

x = "yo"
y= "bo"
let z =`<h1> Hello ${x} & ${y}</h1> 
        <p>Hope both are fine!<p>`
document.body.innerHTML=z

// SPLICE FOR ARRAY WHILE SLICE FOR STRING
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1);
console.log(fruits); //["Banana", "Orange", "Mango"]

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);  //["Banana", "Orange", "Lemon", "Kiwi"]

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);  //["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
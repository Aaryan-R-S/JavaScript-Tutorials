console.log('')
console.log('Tut 16')

//CREATE ELEMENT
let a =document.createElement('li')
a.id = 'yo'
a.className = 'yo'
//OR
a.setAttribute('title', 'bo')
//MODIFY
a.innerText='created through js'
a.innerHTML='<b>created through js</b>'
console.log(a)
//append to html
let ul =document.querySelector('ul.ew')
ul.append(a)
//OR
// ul.appendChild(a)

//replace
let k =document.querySelector('.child')
//   k.replaceWith('REPLACED')

//remove
//   k.remove()
console.log(' ')
console.log('This is Tut 15')

//to get only tags & text excluding comments
let cont=document.querySelector('.cont')
console.log(cont.children)

//to get tags & text including comments
console.log(cont.childNodes)

//0 means 1st item in list--
console.log(cont.childNodes[3].nodeType)
// 1. element
// 2. attribute
// 3. text node
// 8. comment
// 9. document
// 10. doctype

console.log('')

let yo =document.querySelector('.yo')
console.log(yo.children)
console.log(yo.childElementCount)//no. of direct childs

//child of childs
//0 means 1st item in list--
console.log(yo.children[0].children)

//3 means 4th item in list--
console.log(yo.children[3].children)

//only element --first
console.log(yo.firstElementChild)
//only element --second
console.log(yo.firstElementChild.nextElementSibling)


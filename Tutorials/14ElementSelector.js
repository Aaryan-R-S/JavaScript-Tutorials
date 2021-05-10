console.log(' ')
console.log('Tut14')

let p =document.getElementById('first')
console.log(p)
console.log(p.className)
console.log(p.childElementCount)
p.style.color ='pink'
p.innerText ='Yo!' 
p.innerHTML ='<b> Po</b>' //overwrite existing childs

//id
console.log(document.getElementById('h'))
console.log(document.querySelector('#h'))
document.querySelector('#h').style.color="green"

//class
console.log(document.getElementsByClassName('items'))
console.log(document.querySelectorAll('.items'))

//tags
console.log(document.getElementsByTagName('div'))
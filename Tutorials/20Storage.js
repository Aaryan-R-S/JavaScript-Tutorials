console.log('')
console.log('Tut20')

//feed items
localStorage.setItem('Name','Ars')
localStorage.setItem('Name2','Harry')

//session storage same as local but its temporary
sessionStorage.setItem('Name','Ars')
sessionStorage.setItem('Name2','Harry')

//fetch items
let Name=localStorage.getItem('Name')
console.log(Name)

//clear a particular item
localStorage.removeItem('Name2')

//clear storage
localStorage.clear()

//string to object
//    console.log(JSON.parse(z))

//object to string
let k = [32,24,1,443,5]
console.log(JSON.stringify(k))
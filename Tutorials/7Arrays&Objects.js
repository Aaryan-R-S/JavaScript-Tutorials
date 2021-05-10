const age=[ 23,50,41,13,34,23]
const fruits =['apple','banana', "orange"]
let no =new Array(42,43,"sdk",true)

console.log(age)
console.log(fruits)
console.log(no)

console.log(age.length)
console.log(fruits[1])//element at 1 position
console.log(no.length)

console.log(no.push("hi"))//added element 

no[1]= 4823
console.log(no)//makes 4823 added to 1 position

console.log(no.indexOf(2))//-1 means not exists in array

console.log(no.unshift(13))//add element to starting 
console.log(no.shift())//removes 1st element
console.log(no.pop())//removes last element

no.reverse()//reverse array
console.log(no)

let np =[3,24,43,35]
console.log(no+np)

no= no.concat(np)
console.log(no)

//objects
let ob = {
    'dcke dc':"fv",
    kkw:"dc",
    kwq:34,
    ssv:[43,335,null,"xasx3"],
    hvj: function(){
        return this.kkw() 
    }
    //this.method -- owner of method which is a object
    //in absence of an object it will be take global objet - window object
//e.g. --
    //   <button onclick="this.style.display='none'">
    //         Click to Remove Me!
    //    </button>
}
console.log(ob)
console.log(ob.kkw)
console.log(ob.ssv)
console.log(ob.hvj())


var person = ["John", "Doe", 46];
person[0] = "Tom"
console.log(person[0]);  //gives Tom not John


//for strings sorting
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
// fruits.reverse()
console.log(fruits);


//for no.s sorting
var points = [40, 100, 1, 5, 25, 10];
points.sort((a, b)=>{
    return a - b
});
console.log(points);
//for descending b-a

//for object sorting
var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
cars.sort((a, b)=>{
      return a.year - b.year
    });
console.log(cars);


//filter func
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter((x)=>{
    return x > 18;
});
console.log(over18)
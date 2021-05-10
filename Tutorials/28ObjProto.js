console.log('');
console.log('Tut28');

//object literal takes default prototypes
let obj1 ={
    name: 'ars',
    age: '18',
    location: 'india',
}
console.log(obj1);

//object constructor designs custom prototypes
function obj(x,y,z){
    this.name = x
    this.age = y
    this.location = z
}

//editing
obj.prototype.getName = function(){
    return this.name ;
}
//or
obj.prototype.setName = function(a){
    this.name = a;
}

//print
let obj2 = new obj('harry', 29,'england')
console.log(obj2)
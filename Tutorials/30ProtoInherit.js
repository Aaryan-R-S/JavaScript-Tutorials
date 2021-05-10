console.log('');
console.log('Tut30');

const proto = {
    x: function(){
        return `This company is best !`
    },
    y: function(a){
        this.Name = a
    }
}
//create object
let ars = Object.create(proto)
ars.Name='ARS'
ars.Age = 18
ars.Role = 'Coder'
console.log(ars)
//application of prototypes
ars.y('Ars')
console.log(ars)

//employee constructor
function employee(j,k,l){
    this.Name =j
    this.Salary =k
    this.Experience =l
}

employee.prototype.x = function(){
       return`This is best company. Regards ${this.Name}`
}

let harry = new employee('Harry', 243244, 35)
console.log(harry);
console.log(harry.x())

//inherit prototypes
employer.prototype= Object.create(employee.prototype)
employer.prototype.constructor = employer

function employer(j,k,l,m){
    employee.call(this,j,k,l)
    this.Language = l
}

let rohan = new employer('Rohan', 33322, 23,'Js')
console.log(rohan);
console.log(rohan.x());

//sample example
function food(q,w,e){
    this.name =q
    this.amountinKG =w
    this.country =e
}

food.prototype.setName =function(t){this.name=t}
food.prototype.setAmt =function(r){this.amountinKG =r}
food.prototype.hint =function(){return`Grown in ${this.country}`}

let wheat = new food('Wheat', 1, 'India')
let maize = new food('Maize', 1.5, 'USA')
let corn =new food('Corn',0.75, 'Japan')
console.log(wheat, maize, corn);
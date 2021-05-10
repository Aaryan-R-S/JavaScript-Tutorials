console.log('')
console.log('Tutu31')
//CREATE OBJECT
class employee{
    constructor (x,y,z){    
        this.name = x;
        this.experience=y;
        this.division =z;
    }
    a(){
        return`I'm employee of this company. Regards ${this.name}`
    }
    b(){
        return 2020-this.experience
    }
    static c(p){
           return p.name+" is good boy"
    }
}

let ars = new employee('ARS', 1, 'Division')
console.log(ars)
console.log(ars.a())
console.log(ars.b())
console.log(employee.c(ars))

// INHERITANCE
class programmer extends employee{
    constructor(x,y,z,lang,gh){
        super(x,y,z)
        this.language =lang
        this.github =gh
    }
    d(){
        if(this.language=='python'){
            return 'Python'
        }
        else{
            return 'JavaScript'
        }
    }
    static e(m,n){
        return m*n
    }
}

let harry = new programmer('Harry', 3, 'Lays', 'python', 'Harry2343') 
console.log(harry);
console.log(harry.d());
console.log(harry.b());
console.log(programmer.c(5,4));
console.log(programmer.e(5,4));



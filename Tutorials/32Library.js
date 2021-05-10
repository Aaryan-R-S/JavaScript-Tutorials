console.log('')
console.log('Tut32')

class bookList{
    constructor(bookList){
        this.bookList= bookList
        this.issuedBooks={} //object
    }
    getBookList(){
        this.bookList.forEach((Element)=>{
            console.log(Element)
        })
    }
    issueBooks(bookName, user){
        if(this.issuedBooks[bookName] == undefined){
            this.issuedBooks[bookName]= user //object
        }
        else{
            console.log('This book is already issued!')
        }
    }
    returnBooks(bookName){
       delete this.issuedBooks[bookName]
    }
}
let myLibrary = new bookList(['qwc','54dc','34d f3fe', 'plmplm'])
console.log(myLibrary);


//another e.g.
class library{
    constructor (p,q){
        this.UserName=p
        this.BookName= q
        if(this.BookName != undefined){
            this.BookName= q
        }
        else{
            this.BookName = "No book is Issued"
        }
    }
    issueBook(a){
       this.BookName =a
    }
    returnBook(){
       this.BookName = "No book is Issued"
    }
}

let ars= new library('ARS')
let harry= new library('Harry')
let po= new library('Po','Three Mistakes of my life')
let bo= new library('Bo','Journey to the End of the Earth')
console.log(ars,harry,po,bo);


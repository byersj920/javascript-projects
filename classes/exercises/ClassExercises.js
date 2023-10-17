// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, checkoutCount, isDiscarded){
        this.title = title,
        this.author = author,
        this.copyrightDate = copyrightDate,
        this.isbn = isbn,
        this.numberOfPages = numberOfPages,
        this.checkoutCount = checkoutCount,
        this.isDiscarded = isDiscarded
    }
    checkout (timesRented = 1){
        this.checkoutCount += timesRented;
    }
}
// Define your Manual and Novel classes here:
class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, checkoutCount, isDiscarded){
        super (title, author, copyrightDate, isbn, numberOfPages, checkoutCount, isDiscarded);
    }
    discard (){
        if (this.checkoutCount > 100){
            this.discarded = 'Yes';
        }
    }
}

class Manual extends Book {
    constructor (title, author, copyrightDate, isbn, numberOfPages, checkoutCount, isDiscarded){
        super (title, author, copyrightDate, isbn, numberOfPages, checkoutCount, isDiscarded);
    }
    discard (currentYear){
        if (currentYear - (this.copyrightDate) > 5){
            this.isDiscarded = 'Yes';
        }
    }
}



// Declare the objects for exercises 2 and 3 here:

let prideAndPrejudice = new Novel ('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No');
let secretShuttle = new Manual ('Top Secret Shuttle Building Manual', 'REDACTED', 2013, '0000000000000', 1147, 1, 'No');


// Code exercises 4 & 5 here:
secretShuttle.discard(2023);
prideAndPrejudice.checkout(5);
/* 
    Library
    
    Fetch the collection of books 
        from books.json, assign each 
        a unique id
        
    Create a div to represent a book
        using Grid & grid-template-areas 
        build a book component
        display all books using Flexbox
*/

async function getBooks() {
    let response = await fetch('books.json')
    let books = await response.json()
    let n = 1
    return books.map(book => {
        book.id = n
        n += 1
        return book
    })
}

getBooks().then(books => {
    console.log(books)
})
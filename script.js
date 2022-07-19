const main = document.querySelector('.main');
let id = 0;
let myLibrary = [];

function getBookDisplay(book) {
    return `
        <div class="card">
            <div class="card-container">
                <div class="status read"></div>
                <div class="card-info">
                    <div class="card-title">
                        ${book.title}
                    </div>
                    <div class="card-label">
                        ${book.author} &#183 ${book.year}
                    </div>
                    <div class="card-pages">
                        ${book.pages} ${book.pages > 1 ? "pages": "page"}
                    </div>
                    <div class="card-footer">
                        <img src="./icons/book-open-variant.svg" alt="" title="Toggle read" class="icon clickable" onclick="toogleRead(this);">
                        <img src="./icons/trash-can.svg" alt="" title="Delete book" class="icon clickable" onclick="deleteBook(this);">
                    </div>
                </div>
            </div>
        </div>`
}

function getCardFromChild(element) {
    while (element.className !== 'card') {
        element = element.parentElement
    }
    return element;
}

function deleteBook(element) {
    element = getCardFromChild(element);
    element.remove();
}

function toogleRead(element) {
    element = getCardFromChild(element);
    element.querySelector('.status').classList.toggle('not-read');;
}

function Book(title, author, year, pages) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
}

function addBookToLibrary() {
    let book = new Book('Test0', 'Goodman', 1970, 297);
    main.innerHTML += getBookDisplay(book);
}

document.querySelector('.fab-container').addEventListener("click", ()=> {
    console.log('Hii!!!');
    addBookToLibrary();
});
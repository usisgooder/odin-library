const main = document.querySelector('.main');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('form');

function Book(title, author, year, pages) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
}

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
                        <img src="./icons/book-open-variant.svg" alt="" title="Toggle read" class="icon clickable" onclick="toggleRead(this);">
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

function toggleRead(element) {
    element = getCardFromChild(element);
    element.querySelector('.status').classList.toggle('not-read');;
}

function off() {
    overlay.style.display = "none";
}

function registerBook() {
    overlay.style.display = "flex";
}

function addBookToDisplay(book) {
    main.innerHTML += getBookDisplay(book);
}

function handleSubmit() {
    let title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    year = document.getElementById('year').value,
    pages = document.getElementById('pages').value;
    let book = new Book(title, author, year, pages);
    addBookToDisplay(book)
    if (!document.getElementById('completed').checked) {
        toggleRead(main.lastChild);
    }
    off();
    form.reset();
}

let randomBooks = [
    new Book('In Search of Lost Time', 'Marcel Proust', 1913, 4215),
    new Book('Ulysses', 'James Joyce', 1904, 1920),
    new Book('Don Quixote', 'Miguel de Cervantes', 1605, 1077),
    new Book("Alice's Adventures in Wonderland", "Lewis Carroll", 1865, 109),
    new Book('One Hundred Years of Solitude', 'Gabriel Garcia Marquez', 1967, 401)
];
document.querySelector('.fab-container').addEventListener("click", ()=> {
    registerBook();
});
document.querySelector('#random').addEventListener('click', () => {
    addBookToDisplay(randomBooks[Math.floor((Math.random()*randomBooks.length))]);
    toggleRead(main.lastChild);
    off();
    form.reset();
});
form.addEventListener('submit', handleSubmit);

addBookToDisplay(
    new Book("Alice's Adventures in Wonderland", "Lewis Carroll", 1865, 109)
);

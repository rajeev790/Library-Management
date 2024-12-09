document.getElementById('addBookBtn').addEventListener('click', () => {
    // Logic to add a new book
    const bookTitle = prompt("Enter book title:");
    const bookAuthor = prompt("Enter book author:");
    // Add book to the database (API call)
    fetch('http://localhost:5000/api/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ title: bookTitle, author: bookAuthor }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        // // Refresh the book list or handle the response accordingly
    })
    .catch(error => console.error('Error adding book:', error));
});

// Function to fetch and display the list of books
async function fetchBooks() {
    const response = await fetch('http://localhost:5000/api/books', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    const books = await response.json();
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(bookItem);
    });
}

// Call fetchBooks on page load
fetchBooks();
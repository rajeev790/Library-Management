document.getElementById('viewBooksBtn').addEventListener('click', async () => {
    const response = await fetch('http://localhost:5000/api/books');
    const books = await response.json();
    const borrowedBooks = document.getElementById('borrowedBooks');
    borrowedBooks.innerHTML = '';
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.textContent = `${book.title} by ${book.author}`;
        borrowedBooks.appendChild(bookItem);
    });
});

// Function to borrow a book
document.getElementById('borrowBookBtn').addEventListener('click', () => {
    const bookId = prompt("Enter the ID of the book to borrow:");
    fetch(`http://localhost:5000/api/borrow/${bookId}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => console.error('Error borrowing book:', error));
});
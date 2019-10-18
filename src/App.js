import React, { useState } from 'react'
import { AddBookForm } from './forms/AddBookForm'
import { EditBookForm } from './forms/EditBookForm'
import { BookTable } from './tables/BookTable'
import './App.css'

const App = () => {
  const booksData = [
  ]
  const [books, setBooks] = useState(booksData)
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: ''}
  const [currentBook, setCurrentBook] = useState(initialFormState)

  const addBook = book => {
    book.id = books.length + 1
    setBooks([...books, book])
  }
  const deleteBook = id => {
    setEditing(false)
    setBooks(books.filter(book => book.id !== id))
  }

  const updateBook = (id, updatedBook) => {
    setEditing(false)
    setBooks(books.map(book => (book.id === id ? updatedBook : book)))
  }

  const editRow = book => {
    setEditing(true)
    setCurrentBook({ id: book.id, name: book.name})
  }

  return (
      <div className="container mt-5">
        <div>
          <div>
            {editing ? (
                <div>
                  <h2>Edit book</h2>
                  <EditBookForm
                      editing={editing}
                      setEditing={setEditing}
                      currentBook={currentBook}
                      updateBook={updateBook}
                  />
                </div>
            ) : (
                <div>
                  <h3>Add book</h3>
                  <AddBookForm addBook={addBook} />
                </div>
            )}
          </div>
          <div className="mt-4">
            <h3>View books</h3>
            <BookTable books={books} editRow={editRow} deleteBook={deleteBook} />
          </div>
        </div>
      </div>
  )
}
export default App;

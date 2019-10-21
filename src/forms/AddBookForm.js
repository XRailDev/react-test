import React, { useState } from 'react'
import { Button, Input } from 'reactstrap';
const AddBookForm = props => {
    const initialFormState = { id: null, name: ''}
    const [book, setBook] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.currentTarget
        setBook({ ...book, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!book.name) return

        props.addBook(book)
        setBook(initialFormState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="mr-2">Book name</label>
            <input
                type="text"
                name="name"
                value={book.name}
                onChange={handleInputChange}
                className="mr-2"
            />
            <Button color="primary">Add new book</Button>
        </form>
    )
}

export { AddBookForm }
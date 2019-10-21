import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap';
const EditBookForm = props => {
    const [book, setBook] = useState(props.currentBook)

    useEffect(
        () => {
            setBook(props.currentBook)
        },
        [props]
    )

    const handleInputChange = event => {
        const { name, value } = event.target

        setBook({ ...book, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!book.name) return

        props.updateBook(book.id, book)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Book name</label>
            <input
                type="text"
                name="name"
                value={book.name}
                onChange={handleInputChange}
                className="ml-2"
            />
            <Button className="ml-2" color="success">Update book</Button>
            <Button
                onClick={() => props.setEditing(false)}
                className="ml-2"
                color="secondary"
            >
                Cancel
            </Button>
        </form>
    )
}

export { EditBookForm }
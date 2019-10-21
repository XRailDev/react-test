import React from 'react'
import { Table, Button } from 'reactstrap';
const BookTable = props => {
    const handleDeleteBook = id => {
        let warn = window.confirm('Are you sure?')
        if (warn) {
            props.deleteBook(id)
        }
    }
    return (
        <Table>
            <thead>
            <tr>
                <th>Book name</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.books.length > 0 ? (
                props.books.map(book => (
                    <tr key={book.id}>
                        <td>{book.name}
                        </td>
                        <td>
                            <Button
                                onClick={() => {
                                    props.editRow(book)
                                }}
                                color="success"
                            >
                                Edit
                            </Button>
                            <Button
                                className="ml-2"
                                color="danger"
                                onClick={() => handleDeleteBook(book.id)}
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No books</td>
                </tr>
            )}
            </tbody>
        </Table>
    )
}

export { BookTable }
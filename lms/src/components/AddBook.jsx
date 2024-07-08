import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:3001/book/add',
                (name, author, imageUrl) => {}
            )
            .then((res) => {
                if (res.data.added) {
                    navigate('/books');
                } else {
                    console.log(res);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="form-group">
            <form className="student-form" onSubmit={handleSubmit}>
                <h2>Add Book</h2>
                <div className="form-group">
                    <label htmlFor="book">Book Name: </label>
                    <input
                        type="text"
                        id="book"
                        name="book"
                        onChange={(event) => {
                            setAuthor(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author Name: </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image URL:</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        onChange={(event) => {
                            setImageUrl(event.target.value);
                        }}
                    />
                </div>

                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;

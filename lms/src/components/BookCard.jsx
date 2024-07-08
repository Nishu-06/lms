import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ books }) => {
    const { name, author, imageUrl } = book;
    return (
        <div className="book-card">
            <img src={imageUrl} alt={name} className="book-image" />
            <div className="book-details">
                <h3>{name}</h3>
                <p>{author}</p>
            </div>
            <div className="book-actions">
                <button>
                    <Link to={`/book/${book._id}`}>EDIT</Link>
                </button>
                <button>
                    <Link>DELETE</Link>
                </button>
            </div>
        </div>
    );
};

export default BookCard;

import React from "react";
import './book-list-item.css'
import {Link} from "react-router-dom";

export const BookListItem = ({ book, getBookDetails }) => {
    const { title, authors, image } = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={image} alt=''/>
            </div>
            <div className="book-details">
                <Link to="/description" onClick={getBookDetails} className="book-title">{title}</Link>
                <div className="book-author">{authors}</div>
                <Link to="/description" >
                    <button
                        onClick={getBookDetails}
                        className="btn btn-info add-to-cart">More Details
                    </button>
                </Link>

            </div>

        </div>
    );
};
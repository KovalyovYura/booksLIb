import React, { Component } from "react";
import './book-list.css'
import { BookListItem } from "../book-list-item/book-list-item";
import { withBookstoreService } from "../hoc/with-bookstore-service";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { compose } from '../../utils';
import {fetchBooks, clickedBook} from "../../actions";
import Spinner from "../spinner";
import {ErrorIndicator} from "../error-indicator/error";

const BookList = ({ books, getBookDetails }) => {
    return (
        <ul className='book-list'>
            {books.map((book) => {
                return <li key={book.id}>
                            <BookListItem
                                getBookDetails={() => getBookDetails(book.id)}
                                book={book}/>
                       </li>
            })}
        </ul>
    );
}

class BookListContainer extends Component{
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, clickedBook, filter} = this.props
        const filteredBooks = books.filter(({title}) => title.toLowerCase().includes(filter.toLowerCase()))
        if(error)
            return <ErrorIndicator/>
        if(loading)
            return <Spinner/>;
        return (<div className='container'>
                <BookList books={ filteredBooks } getBookDetails={clickedBook}/>
             </div>);
    }
}

const mapStateToProps = ({booksList: { books, loading, error, filter }}) => {
    return { books, loading, error, filter}
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        clickedBook: clickedBook
    }, dispatch)
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
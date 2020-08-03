
const fetchBooksRequest = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
        payload: newBooks
    };
};

const fetchBooksSuccess = () => {
    return { type: 'FETCH_BOOKS_SUCCESS' }
}

const fetchBooksFailure = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const fetchBooks = (bookstoreService) => () => (dispatch) => {
    dispatch(fetchBooksSuccess());
    bookstoreService.getBooks()
        .then(data => dispatch(fetchBooksRequest(data)))
        .catch(error => dispatch(fetchBooksFailure(error)))
}

const clickedBook = (bookId) => {
    return {
        type: 'CLICKED_BOOK',
        payload: bookId
    }
}

const booksFilter = (text) => {
    return {
        type: 'BOOKS_FILTER',
        payload: text
    }
}



export {
    fetchBooks,
    booksFilter,
    clickedBook
}
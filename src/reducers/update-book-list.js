const updateBookList = (state, action) => {
    if(state === undefined){
        return {
            books: [],
            loading: true,
            filter: '',
            clickedId: null,
            error: null
        }
    }
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state.booksList,
                loading: true,
                error: null,

            };
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state.booksList,
                books: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state.booksList,
                books: [],
                loading: false,
                error: action.payload
            }
        case 'BOOKS_FILTER':
            return {
                ...state.booksList,
                filter: action.payload
            }
        case 'CLICKED_BOOK':
            return {
                ...state.booksList,
                clickedId: action.payload
            }
        default:
            return state.booksList
    }

}

export default updateBookList;
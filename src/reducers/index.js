import updateBookList from "./update-book-list";

const reducer = (state, action) => {
    return {
        booksList: updateBookList(state, action),
    }
}
export default reducer;
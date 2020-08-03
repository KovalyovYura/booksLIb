import React, { useState } from "react";
import './search.css'
import {booksFilter} from "../../actions";
import {connect} from "react-redux";

const Search =({ booksFilterHandler }) => {

    const [value, setValue] = useState('')

    const onChange = (e) => {
        const text = e.target.value
        setValue(text);
        booksFilterHandler(text);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setValue('');
        booksFilterHandler('');

    }

    return (
        <form className="form-inline d-flex justify-content-center md-form form-sm mt-0"
        onSubmit={(e) => onSubmit(e)}>
            <input value={value}
                   className="form-control form-control-sm ml-3 w-75"
                   type="text"
                   placeholder="filter books by title"
                   aria-label="Search"
                   onChange={(e) => onChange(e)}/>
        </form>
    );
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        booksFilterHandler: (text) => dispatch(booksFilter(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
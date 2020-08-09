import React, { useState } from "react";
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
        <form className="col-sm-4"
        onSubmit={(e) => onSubmit(e)}>
            <input value={value}
                   className="form-control"
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
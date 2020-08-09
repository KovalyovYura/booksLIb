import React from "react";
import './shop-header.css';
import { Link } from "react-router-dom";
import Search from "../search/search";
export const ShopHeader = () => {
    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo">BooksLib</div>
            </Link>
            <Search/>
        </header>
    );
}





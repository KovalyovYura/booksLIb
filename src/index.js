import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from "./components/app";
import {BookstoreServiceProvider} from "./components/bookstore-service-context";
import BookStoreService from "./services/book-store-service";
import store from './store'
import ErrorBoundry from "./components/error-boundry";


const bookstoreService = new BookStoreService();


ReactDOM.render(
 <Provider store={store}>
    <ErrorBoundry>
        <BookstoreServiceProvider value={bookstoreService}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </BookstoreServiceProvider>
    </ErrorBoundry>
 </Provider>,
  document.getElementById('root')
);



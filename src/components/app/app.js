import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css'
import {BookInfo,Home} from '../pages';
import ShopHeader from '../shop-header';

const App = () => {
    return (
            <main role="main">
                <ShopHeader/>
                <Switch>
                    <Route
                        path="/"
                        component={Home}
                        exact />
                    <Route
                        path="/description"
                        component={BookInfo}/>
                </Switch>
            </main>

    );
}

export default App;
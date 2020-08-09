import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {BookInfo,Home} from '../pages';
import ShopHeader from '../shop-header';

const App = () => {
    return (
            <div>
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
            </div>
    );
}

export default App;
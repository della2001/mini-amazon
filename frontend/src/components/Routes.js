import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Details from './Details';

export const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/category/:productid" component={Details} />
                        <Route render={() => <h1>Not found!</h1>} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}
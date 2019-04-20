import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/Main';
import Box from './pages/Box';
import BoxAll from './pages/BoxAll';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/box/:id" component={Box} />
            <Route path="/boxes" component={BoxAll} />
        </Switch>
    </BrowserRouter>
);

export default Routes;

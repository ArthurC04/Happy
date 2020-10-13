import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/landing';
import OrphanagesMap from './pages/orphanagesMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Landing} path='/' exact />
                <Route component={OrphanagesMap} path='/map' />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
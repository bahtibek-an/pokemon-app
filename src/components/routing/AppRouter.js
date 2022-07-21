import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoutes} from "../../routes";
import {NOT_FOUND} from "../../utils/consts";

const AppRouter = () => {
    return (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect from='*' to={NOT_FOUND} />
        </Switch>
    );
};

export default AppRouter;
import React from "react";
import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import { routes } from "./config/routes";

const App: React.FC<{}> = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, i) => {
            return (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

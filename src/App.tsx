import React from "react";
import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import { routes } from "./config/routes";
import { SnackbarProvider } from "./pages/hook";

const App: React.FC<{}> = (props) => {
  return (
    <SnackbarProvider>
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
    </SnackbarProvider>
  );
};

export default App;

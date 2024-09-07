import React from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/Default/index.ts";

// layouts
import NonAuthLayout from "../layouts/NonAuth/index.tsx";
import { AuthProtected } from "./AuthProtected.tsx";

import { publicRoutes, privateRoutes } from "./allRoutes.tsx";

const Index = (props: any) => {

  return (
    <React.Fragment>
      <Routes>
        <Route>
              {publicRoutes.map((route : any, idx :  number) => (
                <Route
                  path={route.path}
                  element={
                    <NonAuthLayout>
                      {route.component}
                    </NonAuthLayout>
                  }
                  key={idx}
                />
              ))}
        </Route>

        <Route>
              {privateRoutes.map((route, idx) => (
                <Route
                  path={route.path}
                  element={
                    <AuthProtected>
                      <DefaultLayout>
                      {route.component}
                      </DefaultLayout>
                    </AuthProtected>
                  }
                  key={idx}
                  // exact={true}
                />
              ))}
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default Index;

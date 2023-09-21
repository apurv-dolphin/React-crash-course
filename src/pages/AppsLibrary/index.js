import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const ScrollIndicatorPage = React.lazy(() => import("./ScrollIndicatorPage"));

const AppsLibrary = () => {
  let { path } = useRouteMatch();
  console.log(path);
  return (
    <Switch>
      <Route component={ScrollIndicatorPage} />
    </Switch>
  );
};

export default AppsLibrary;

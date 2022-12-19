import { Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from 'app/pages/HomePage/Loadable';
import NotFoundPage from 'app/pages/NotFoundPage/Loadable';
import RouteEnum from './RouteEnum';

function Routes() {
  return (
    <Switch>
      <Route exact path={RouteEnum.HOME.path} component={HomePage} />
      <Route exact path={RouteEnum.FLIGHT.path} component={NotFoundPage} />
      {/* 
          ^^^ Insert new Route ABOVE ^^^
          - switch will render the first child matches the location, therefore, the following route need to be place last
      */}
      {/* <Redirect exact from="/" to={RouteEnum.HOME.path} /> */}
      <Redirect exact from="/" to={RouteEnum.HOME.path} />
      {/* Default fallback to any unrecognised path */}

      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default Routes;

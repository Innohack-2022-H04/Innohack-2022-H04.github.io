import _ from 'lodash';
import FlightIcon from '@mui/icons-material/Flight';
import HomeIcon from '@mui/icons-material/Home';
import { generateAppPath } from './utils';

const generatePath = (path, params) => {
  const paramStart = ':';
  if (path.includes(paramStart)) {
    let paramCount = -1;
    const delimiter = '/';
    const pathArr = path.split(delimiter).map((part) => {
      if (part.startsWith(paramStart)) {
        paramCount += 1;
        return params[paramCount];
      }
      return part;
    });
    return pathArr.join(delimiter);
  }
  return path;
};

const generateRouteEnum: any = (navigationConfigItems: Object) => {
  const routeEnum = [];
  Object.keys(navigationConfigItems).forEach((key) => {
    const value = navigationConfigItems[key];
    const path = generateAppPath(value.path);
    const matchPath = generateAppPath(value.matchPath);
    routeEnum[key] = _.merge({}, value, {
      path,
      matchPath,
      getPath: (...params) => generatePath(path, params),
    });
  });
  return routeEnum;
};

const navigationConfigItems: Object = {
  HOME: {
    id: 'home-page',
    title: 'Home',
    icon: HomeIcon,
    path: '/home',
    matchPath: '/home',
  },
  FLIGHT: {
    id: 'flight-page',
    title: 'Flight',
    icon: FlightIcon,
    path: '/flight',
    matchPath: '/:path(flight|plane|transport)',
  },
};

export default generateRouteEnum(navigationConfigItems);

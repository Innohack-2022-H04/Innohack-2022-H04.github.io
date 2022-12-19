import { SvgIconComponent } from '@mui/icons-material';
import RouteEnum from 'routes/RouteEnum';
import ExternalRouteEnum from 'routes/ExternalRouteEnum';

export interface CommonNavigationConfigProps {
  id: string;
  title: string;
  icon: SvgIconComponent;
}
export interface NavigationConfigProps extends CommonNavigationConfigProps {
  path: string; // Path to redirect to on click
  matchPath: string; // Path(s) for NavigationListItem to be selected
}

export const navigationConfig: Array<NavigationConfigProps> = [
  RouteEnum.HOME,
  RouteEnum.FLIGHT,
];

export interface ExternalNavigationConfigProps
  extends CommonNavigationConfigProps {
  url: string | Array<{ label: string; url: string }>;
}

export const externalNavigationConfig: Array<ExternalNavigationConfigProps> = [
  ExternalRouteEnum.SHAREPOINT,
];

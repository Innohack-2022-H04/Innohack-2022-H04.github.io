import { NavigationConfigProps as AppNavigationConfigProps } from 'layout/navigation-config';
import { matchPath, useHistory, useLocation } from 'react-router-dom';
import PureNavigationListItem from '../PureNavigationListItem';

function NavigationListItem(props: AppNavigationConfigProps) {
  const { matchPath: path, path: redirectPath } = props;
  const history = useHistory();
  const location = useLocation();
  const selected = Boolean(matchPath(location.pathname, { path }));

  const handleNavItemClick = () => {
    history.push(redirectPath);
  };

  return (
    <PureNavigationListItem
      {...props}
      onNavItemClick={handleNavItemClick}
      selected={selected}
    />
  );
}
export default NavigationListItem;

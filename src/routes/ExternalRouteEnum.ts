import ArticleIcon from '@mui/icons-material/Article';

const generateExternalRouteEnum: any = (
  externalNavigationConfigItems: Object,
) => {
  const externalRouteEnum = [];
  Object.keys(externalNavigationConfigItems).forEach((key) => {
    externalRouteEnum[key] = externalNavigationConfigItems[key];
  });
  return externalRouteEnum;
};

const externalNavigationConfigItems: Object = {
  SHAREPOINT: {
    id: 'sharepoint',
    title: 'Sharepoint',
    icon: ArticleIcon,
    url: [
      { label: 'A SharePoint', url: 'url' },
      { label: 'B SharePoint', url: 'url' },
      { label: 'C SharePoint', url: 'url' },
    ],
  },
};

export default generateExternalRouteEnum(externalNavigationConfigItems);

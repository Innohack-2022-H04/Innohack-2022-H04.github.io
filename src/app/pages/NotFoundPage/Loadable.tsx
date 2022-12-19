/**
 * Asynchronously loads the component for NotFoundPage
 */

import { LoadingPage } from '@components';
import { lazyLoad } from 'utils/loadable';

const NotFoundPage = lazyLoad(
  () => import('./index'),
  (module) => module.default,
  {
    fallback: <LoadingPage />,
  },
);

export default NotFoundPage;

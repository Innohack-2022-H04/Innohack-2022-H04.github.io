/**
 * Asynchronously loads the component for HomePage
 */

import { LoadingPage } from '@components';
import { lazyLoad } from 'utils/loadable';

export const HomePage = lazyLoad(
  () => import('./index'),
  (module) => module.default,
  {
    fallback: <LoadingPage />,
  },
);
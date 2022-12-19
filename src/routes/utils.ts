/* This application will be hosted behind a proxy. Added '/apps' prefix to prevent route name clashing with proxy name */
// const PATH_PREFIX = '/frontend-application';
const PATH_PREFIX = '';
export const generateAppPath = (path) => `${PATH_PREFIX}${path}`;

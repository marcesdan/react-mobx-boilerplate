const useMirage = process.env.NODE_ENV === 'development';

const mirageLoad = async () => useMirage && import(
  /* webpackChunkName: "mirage-config" */
  /* webpackMode: "lazy" */
  './MirageConfig'
);

export default () => Promise.all([
  mirageLoad(),
]);

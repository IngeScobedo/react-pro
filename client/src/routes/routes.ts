import { lazy, LazyExoticComponent } from 'react';

import NoLazy from '../lazyload/pages/NoLazy';

// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}
const LazyLayout = lazy(
  () => import(/* webpackChunkName: "LazyLayout" */ '../lazyload/layout/LazyLayout'),
);
// const Lazy1 = lazy(
//   () => import(/* webpackChunkName: "LazyPage1" */ '../lazyload/pages/LazyPage1'),
// );
// const Lazy2 = lazy(
//   () => import(/* webpackChunkName: "LazyPage2" */ '../lazyload/pages/LazyPage2'),
// );
// const Lazy3 = lazy(
//   () => import(/* webpackChunkName: "LazyPage3" */ '../lazyload/pages/LazyPage3'),
// );

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'Lazy-load',
  },
  {
    path: 'no-lazy',
    to: '/no-lazy',
    Component: NoLazy,
    name: 'NoLazy',
  },
];

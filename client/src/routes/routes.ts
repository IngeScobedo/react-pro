import { LazyExoticComponent } from 'react';

import Base from '../Base';
import ShoppingPage from '../component-patterns/pages/ShoppingPage';

// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

/**
 * @description List of routes that can be used in the app, the first element in the list will be used as the default route for the application, and type "Route" will be used with lazy loading routes and no lazy load routes
 * @property {string} to
 * @property {string} path
 * @property {string} Component LazyExoticComponent<JSXComponent> | JSXComponent
 * @property {string} name Name to render
 */
export const routes: Route[] = [
  {
    to: '/',
    path: '/',
    Component: ShoppingPage,
    name: 'Shopping',
  },
  {
    to: '/base',
    path: 'base',
    Component: Base,
    name: 'Base',
  },
];

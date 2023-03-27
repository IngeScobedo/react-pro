import { lazy, LazyExoticComponent } from 'react';

import Base from '../Base';

// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: Base,
    name: 'Lazy-1',
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: Base,
    name: 'Lazy-2',
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: Base,
    name: 'Lazy-3',
  },
];

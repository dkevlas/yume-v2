import { lazy } from 'react';

export const HomePage = lazy(()=> import('./Home.routes'));
export const ShoppingPage = lazy(()=> import('./Shopping.routes'));

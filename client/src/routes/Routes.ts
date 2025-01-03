import { lazy } from 'react';

export const HomePage = lazy(()=> import('./Home.routes'));
export const ShoppingPage = lazy(()=> import('./Shopping.routes'));
export const ProductPage = lazy(()=> import('./Product.routes'));
export const PrivatePage = lazy(()=> import('./Private.routes'));
export const CartPage = lazy(()=> import('./Cart.routes'));

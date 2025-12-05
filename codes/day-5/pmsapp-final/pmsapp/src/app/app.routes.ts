import { Routes } from '@angular/router';
import { ProductContainer } from './products/components/product-container/product-container';
import { ProductDetail } from './products/components/product-detail/product-detail';
import { AddProduct } from './products/components/add-product/add-product';
import { EditProduct } from './products/components/edit-product/edit-product';
import { Registration } from './auth/components/registration/registration';
import { Login } from './auth/components/login/login';
import { Home } from './common/components/home/home';
import { PageNotFound } from './common/components/page-not-found/page-not-found';

export const appRoutes: Routes = [
    //product routes
    {
        path: 'products',
        children: [
            {
                path: '', component: ProductContainer
            },
            {
                path: 'view/:id', component: ProductDetail
            },
            {
                path: 'add', component: AddProduct
            },
            {
                path: 'edit/:id', component: EditProduct
            }
        ]
    },

    //auth routes
    {
        path: 'auth',
        children: [
            {
                path: 'register', component: Registration
            },
            {
                path: 'login', component: Login
            }
        ]
    },

    //common routes
    {
        path: 'home', component: Home
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: '**', component: PageNotFound
    }
];

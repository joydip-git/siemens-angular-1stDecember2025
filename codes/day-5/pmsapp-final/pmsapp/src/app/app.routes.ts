import { Routes } from '@angular/router';
import { ProductContainer } from './products/components/product-container/product-container';
import { ProductDetail } from './products/components/product-detail/product-detail';
import { AddProduct } from './products/components/add-product/add-product';
import { EditProduct } from './products/components/edit-product/edit-product';
import { Registration } from './auth/components/registration/registration';
import { Login } from './auth/components/login/login';

export const appRoutes: Routes = [
    {
        path: 'products',
        children: [
            {
                path: 'all', component: ProductContainer
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
    }
];

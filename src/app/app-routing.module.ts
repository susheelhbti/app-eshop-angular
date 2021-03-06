import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ProfileGuardService } from './services/profile-guard/profile-guard.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

import { PageIndexComponent } from './modules/index/pages/index/page-index.component';
import { PageCatalogComponent } from './modules/shop/pages/catalog/page-catalog.component';
import { PageShopIdComponent } from './modules/shop/pages/id/page-shop-id.component';
import { ShoppingCartComponent } from './modules/shoppingcart/pages/shoppingcart/shopping-cart.component';
import { SignupComponent } from './modules/user/pages/signup/signup.component';
import { SigninComponent } from './modules/user/pages/signin/signin.component';
import { ProfileComponent } from './modules/user/pages/profile/profile.component';

const routes: Routes = [
    { path: 'catalog', component: PageCatalogComponent },
    { path: 'catalog/:id', component: PageCatalogComponent },
    { path: 'products/:id', component: PageShopIdComponent },
    { path: 'shoppingcart', component: ShoppingCartComponent },
    { path: 'user/signup', component: SignupComponent },
    {
        path: 'user/signin',
        component: SigninComponent,
        canActivate: [ AuthGuardService ]
    },
    {
        path: 'user/profile',
        component: ProfileComponent,
        canActivate: [ ProfileGuardService ],
        canLoad: [ ProfileGuardService ]
    },
    { path: 'user/logout', component: PageIndexComponent },
    { path: 'checkout', loadChildren: './modules/checkout/checkout.module#PageCheckoutModule' },
    { path: 'contact', loadChildren: './modules/contact/contact.module#PageContactModule' },
    { path: 'about', loadChildren: './modules/about/about.module#PageAboutModule' },
    { path: '', component: PageIndexComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

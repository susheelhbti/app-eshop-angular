import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { GoodsService } from './services/goods/goods.service';
import { SharedService } from './services/shared/shared.service';
import { DataService } from './services/data/data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { AdviceComponent } from './components/advice/advice.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AppRoutingModule } from './app-routing.module';
import { PageCatalogComponent } from './components/page-catalog/page-catalog.component';
import { PageIndexComponent } from './components/page-index/page-index.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { ShoppingCartComponent } from './components//shopping-cart/shopping-cart.component';
import { PageAboutComponent } from './components/page-about/page-about.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		ShopListComponent,
		AdviceComponent,
		SubscriptionComponent,
		MainBannerComponent,
		BrandsComponent,
		ArticlesComponent,
		PageCatalogComponent,
		PageIndexComponent,
		SignupComponent,
		ProfileComponent,
		SigninComponent,
		ShoppingCartComponent,
		PageAboutComponent,
		PageContactComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(
			InMemoryDataService
		)
	],
	providers: [HttpClientModule, SharedService, DataService, GoodsService],
	bootstrap: [AppComponent]
})


export class AppModule {

}
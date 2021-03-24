import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './+store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './core/footer/footer.component';
import { LoaderComponent } from './core/loader/loader.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { UserPanelComponent } from './core/user-panel/user-panel.component';
import { OffersModule } from './offers/offers.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OffersModule,
    CoreModule,
    UserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavigationComponent,
    UserPanelComponent,
    FooterComponent,
    LoaderComponent
  ]
})
export class AppModule { }

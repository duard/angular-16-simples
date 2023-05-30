import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/material.module';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import {
  NgMaterialMultilevelMenuModule,
  MultilevelMenuService,
} from '@eddie666/ng-material-multilevel-menu';
import {
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { HeaderMobileComponent } from './layout/header-mobile/header-mobile.component';
import { FooterMobileComponent } from './layout/footer-mobile/footer-mobile.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
};
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderMobileComponent,
    FooterMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgMaterialMultilevelMenuModule,
    // PerfectScrollbarModule,
    HomeModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

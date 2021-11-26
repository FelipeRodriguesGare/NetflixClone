import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ModalModule } from './modal';
import { UserCardComponent } from './users/user-card/user-card.component';
import { NavBarMainComponent } from './main/nav-bar-main/nav-bar-main.component';
import { NavbuttonComponent } from './main/nav-bar-main/nav-button/navbutton.component';
import { SeriesCardComponent } from './main/series-card/series-card.component';
import { CategoryCarrouselComponent } from './main/category-carrousel/category-carrousel.component';
import { MainStaticComponent } from './main/main-static/main-static.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { NavBarSelectButtonComponent } from './main/nav-bar-main/nav-bar-select-button/nav-bar-select-button.component';
import { NavBarHamburgerMenuComponent } from './main/nav-bar-main/nav-bar-hamburger-menu/nav-bar-hamburger-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HamburgerButtonComponent } from './main/nav-bar-main/nav-bar-hamburger-menu/hamburger-button/hamburger-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    MainComponent,
    FooterComponent,
    UserCardComponent,
    NavBarMainComponent,
    NavbuttonComponent,
    SeriesCardComponent,
    CategoryCarrouselComponent,
    MainStaticComponent,
    ErrorComponentComponent,
    NavBarSelectButtonComponent,
    NavBarHamburgerMenuComponent,
    HamburgerButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

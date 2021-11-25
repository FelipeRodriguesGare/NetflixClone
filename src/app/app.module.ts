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
import { UserCardComponent } from './users/user-card/user-card.component';
import { NavBarMainComponent } from './main/nav-bar-main/nav-bar-main.component';
import { NavbuttonComponent } from './main/nav-bar-main/nav-button/navbutton.component';
import { SeriesCardComponent } from './main/series-card/series-card.component';
import { CategoryCarrouselComponent } from './main/category-carrousel/category-carrousel.component';
import { ErrorComponentComponent } from './error-component/error-component.component';

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
    ErrorComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

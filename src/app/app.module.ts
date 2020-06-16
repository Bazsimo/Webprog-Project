import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Views/Components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './Views/Pages/page-not-found/page-not-found.component';
import { WelcomeComponent } from './Views/Pages/welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { CreatePizzaComponent } from './Views/Pages/create-pizza/create-pizza.component';
import {MealListComponent} from './Views/meal-list/meal-list.component';
import {CurrencyHufPipe} from './Pipes/currency-huf.pipe';
import {FiveStarComponent} from './Views/five-star/five-star.component';
import {DrinkListComponent} from './Views/drink-list/drink-list.component';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './Guards/auth.guard';
import {UserService} from './Services/user.service';
import { RegisterComponent } from './Views/Pages/register/register.component';
import { ResetPasswordComponent } from './Views/Pages/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    MealListComponent,
    DrinkListComponent,
    CurrencyHufPipe,
    FiveStarComponent,
    CreatePizzaComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent, pathMatch: 'full'},
      { path: 'create-pizza', component: CreatePizzaComponent, canActivate: [AuthGuard]},
      { path: 'register', component: RegisterComponent},
      { path: 'reset-password', component: ResetPasswordComponent},
      { path: 'drinks', component: DrinkListComponent},
      { path: '**', component: PageNotFoundComponent},
    ]),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

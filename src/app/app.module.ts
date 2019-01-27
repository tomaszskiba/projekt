import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes} from '@angular/router';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { FilmItemTextComponent } from './components/film-item-text/film-item-text.component';
import { FilmItemImageComponent } from './components/film-item-image/film-item-image.component';
import { SummaryPipe } from './summary.pipe';
import { FilmComponent } from './components/film/film.component';
import { FilmItemDetailComponent } from './components/film-item-detail/film-item-detail.component';
import { DataService } from './services/data-service';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FilmHomeComponent } from './components/film-home/film-home.component';
import { TextFormatDirective } from './directives/text-format.directive';
import { FilmItemCreateComponent } from './components/film-item-create/film-item-create.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './services/auth/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {AuthService} from './services/auth/auth.service';
import { AdminGuard } from './services/admin-guard.guard';
import { RegulaminComponent } from './components/regulamin/regulamin.component';
import { FilmItemContentComponent } from './components/film-item-content/film-item-content.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'regulamin',
    component: RegulaminComponent
  },

  {
    path: 'film',
    component: FilmHomeComponent
  },
  {
    path: 'film/details/:id',
    component: FilmItemDetailComponent
  },
  {
    path: 'film/add',
    component: FilmItemCreateComponent
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
    path: 'register',
    component: SignupComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    NavbarComponent,
    FilmItemComponent,
    FilmItemTextComponent,
    FilmItemImageComponent,
    SummaryPipe,
    FilmComponent,
    FilmItemDetailComponent,
    FilterPipe,
    SearchbarComponent,
    FilmHomeComponent,
    TextFormatDirective,
    FilmItemCreateComponent,
    LoginComponent,
    SignupComponent,
    RegulaminComponent,
    FilmItemContentComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  providers: [DataService,
  AuthService,
  {
         provide: HTTP_INTERCEPTORS,
         useClass: AuthInterceptor,
         multi: true
     }
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }

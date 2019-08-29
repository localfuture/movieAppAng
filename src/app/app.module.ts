import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const appRoutes: Routes = [
  {path:'',component: AddMovieComponent},
  {path:'view',component: ViewMovieComponent},
  {path:'search',component: SearchMovieComponent},
  
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddMovieComponent,
    ViewMovieComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }

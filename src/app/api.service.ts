import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  insertData(data){
   return this.http.post("https://api-movie-angular.herokuapp.com/addMovie",data);
   
  }

  viewData(){
    return this.http.get("https://api-movie-angular.herokuapp.com/viewMovie");
  }

  searchData(data){
    return this.http.post("https://api-movie-angular.herokuapp.com/searchMovie",data);
  }

}

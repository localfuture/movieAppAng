import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  mydata: Array<object> = [];

  onSubmit(data:NgForm){
    this.apiservice.searchData(data.value).subscribe((Response: Array<object>)=>{
        this.mydata = Response;
    });
  }

  ngOnInit() {
  }

}

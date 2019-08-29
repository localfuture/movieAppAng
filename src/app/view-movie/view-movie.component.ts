import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  mydata: Array<object> = [];

  ngOnInit() {
    this.fetchData();
  }

  public fetchData(){
    this.apiservice.viewData().subscribe((Response:Array<Object>)=>{
      this.mydata = Response;
    })
  }

}

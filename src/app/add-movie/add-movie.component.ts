import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService } from '../api.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  onsubmit(data: NgForm) {
    console.log(data.value);
    this.apiservice.insertData(data.value).subscribe((Response:any)=>{
      console.log(Response);
      alert("data successfully send");
    });
  }

  ngOnInit() {
  }

}

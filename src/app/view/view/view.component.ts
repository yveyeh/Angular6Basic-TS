import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  user_name: string;
  response: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  search() {
    this.http.get('https://api.github.com/users/' + this.user_name)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // Dependency injection...

  constructor(private svc: TestService, private http: HttpClient) {
    this.svc.print_to_console('Testing Service...');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    const observable = this.http.get('https://api.github.com/users/yveyeh');
    observable.subscribe((response) => console.log(response));
  }

}

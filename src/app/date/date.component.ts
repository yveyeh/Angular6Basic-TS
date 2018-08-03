import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  date_message: string;
  some_num = 10;

  constructor() {

    setInterval(() => {
      // Sets an interval and changes the value of this component.
      const current_date  = new Date();
      this.date_message  = current_date.toDateString() + ' ' + current_date.toLocaleTimeString();
    }, 1000);

  }

  ngOnInit() {
  }

}

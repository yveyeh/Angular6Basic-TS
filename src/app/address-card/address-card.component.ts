import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {


  @Input('user') user: User;
  is_collapsed = true;

  constructor() {
  }

  toggle_collapse() {
    this.is_collapsed = !this.is_collapsed;
  }

  ngOnInit() {
    // this.user = {
    //   name: this.user.name,
    //   occupation: this.user.occupation,
    //   address: this.user.address,
    //   phone: this.user.phone
    // };
  }

}

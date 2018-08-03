import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;
  is_collapsed = true;
  input_text = 'Initial value';

  constructor() {
    this.user = new User();
    this.user.name = 'Didi Yufen';
    this.user.occupation = 'Software Developer';
    this.user.address = 'Etoa-Meki';
    this.user.phone = ['675007995', '693457666'];
  }
}

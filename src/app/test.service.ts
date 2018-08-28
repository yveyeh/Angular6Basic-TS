import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  print_to_console(arg) {
    console.log(arg);
  }
}

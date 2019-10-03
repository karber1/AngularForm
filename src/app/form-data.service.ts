import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  
  users;
  
  saveUser(data) {
    this.users = JSON.parse(JSON.stringify(data));
    return this.users;
  }

  getUser() {
    console.log(this.users);
  }

  constructor() { }
}

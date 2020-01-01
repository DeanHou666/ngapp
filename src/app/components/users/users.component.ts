import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  firstName= 'John';
  lastName= 'doe';
  age=30;
  constructor() { 
  }

  ngOnInit() {
  }

}

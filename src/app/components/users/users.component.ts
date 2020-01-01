import { Component, OnInit } from '@angular/core';
import { User } from '../models/interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:User
  users:User[];
  loaded:boolean;
  constructor() { 
    
  }

  ngOnInit() {

      this.users =[
        {
          firstName:'John',
          lastName:'Doe',
          age:30,
          address:{
            street:'50th main street',
            city:'boston',
            state:'MA'
          }
        },
        {
          firstName:'John',
          lastName:'Doe',
          age:30,
          address:{
            street:'50th main street',
            city:'boston',
            state:'MA'
          }
        },
        {
          firstName:'John',
          lastName:'Doe',
          age:30,
          address:{
            street:'50th main street',
            city:'boston',
            state:'MA'
          }
        }
      
      ]
      this.loaded=true;

  }

}



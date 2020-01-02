import { Component, OnInit } from '@angular/core';
import { User } from '../models/interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:User ={
    firstName:'',
    lastName:'',
    age:null,
    address:{
      street:'',
      city:'',
      state:''
    },
  }
  users:User[];
  loaded:boolean;
  showUserForm:boolean=false;

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
          },
          hide:true
        },
        {
          firstName:'John',
          lastName:'Doe',
          age:30,
          address:{
            street:'50th main street',
            city:'boston',
            state:'MA'
          },
          hide:true
        },
        {
          firstName:'John',
          lastName:'Doe',
          age:30,
          address:{
            street:'50th main street',
            city:'boston',
            state:'MA'
          },
          hide:false
        }
      
      ]
      this.loaded=true;

  }
  toggleHide(user:User){
    user.hide=!user.hide
  }
  fireEvent(e){
    console.log(e.target.value)
    console.log(e.type)
  }
  onSubmit(){
    this.users.unshift(this.user)
    this.user={
      firstName:'',
      lastName:'',
      age:null,
      address:{
        street:'',
        city:'',
        state:''
      },
    }

  }
}



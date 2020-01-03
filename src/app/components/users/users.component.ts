import { Component, OnInit,ViewChild } from '@angular/core';
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
    email:''
  }
  users:User[];
  loaded:boolean;
  showUserForm:boolean=false;
  @ViewChild('userForm') form:any;

  constructor() { 
    
  }

  ngOnInit() {

      this.users =[
        {
          firstName:'John',
          lastName:'Doe',
          email:'sample@123.com',
          register: new Date('2010-3-2'),
          hide:true
        },
        {
          firstName:'John',
          lastName:'Doe',
          email:'sample@123.com',
          hide:true
        },
        {
          firstName:'John',
          lastName:'Doe',
          email:'sample@123.com',
          hide:false
        }
      
      ]
      this.loaded=true;

  }
  toggleHide(user:User){
    user.hide=!user.hide
  }
  onSubmit({value,valid}:{value:User,valid:boolean}){
    if(!valid){
      alert('pls valid the input info')
    }else{
      value.hide=true
      this.users.unshift(value)
      this.form.reset()
    }

  }
}




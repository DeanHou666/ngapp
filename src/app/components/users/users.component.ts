import { Component, OnInit,ViewChild } from '@angular/core';
import { User } from '../models/interface';
import { UserService } from 'src/app/services/user.service';


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
  data:any;

  constructor(private userService:UserService) { 
    
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users=>{
      this.users=users
    })
    this.loaded=true;
    this.data = this.userService.getDate().subscribe(data=>{
      console.log(data)
    })
  }
  toggleHide(user:User){
    user.hide=!user.hide
  }
  onSubmit({value,valid}:{value:User,valid:boolean}){
    if(!valid){
      alert('pls valid the input info')
    }else{
      value.hide=true
      value.register = new Date()
      this.userService.addUser(value)
      this.form.reset()
    }

  }
}




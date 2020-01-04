import { Injectable } from '@angular/core';
import { User } from '../components/models/interface'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[];
  data:Observable<any>

  constructor() {
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
   }
   getUsers():Observable<User[]>{
     return of(this.users);
   }
   addUser(user:User){
     this.users.unshift(user)
   }

   getDate(){
     this.data=new Observable(observable =>{
       setTimeout(() => {
         observable.next(1)
       }, 1000);
       setTimeout(() => {
        observable.next('tom')
      }, 2000);
      setTimeout(() => {
        observable.next(3)
      }, 3000);
      setTimeout(() => {
        observable.next(4)
      }, 4000);
     })
     return this.data;
   }
}

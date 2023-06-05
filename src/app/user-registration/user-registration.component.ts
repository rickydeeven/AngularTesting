import { Component } from '@angular/core';
import {User} from '../models/user.model'

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  userObj: User={username:"",dob:"",email:""};

  // users: any[]=[];

  addUserData(){

    console.log(this.userObj)
    
    // this.users.push(userObj)

    // ref.reset();

  }

}

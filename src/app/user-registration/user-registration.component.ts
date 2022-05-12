import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserServiceService } from '../userservice.service';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit 
{
  Gender = ['male', 'female'];
  allUsers! :Observable<User[]>; 
  userForm! :FormGroup;
  dataSaved = false;
 
  userIdUpdate = null;
  massage = 'abc';
  constructor(private userservice:UserServiceService)
  {
 
  }
  //create a function onSubmit 
  onSubmit()
  {
    console.log(this.userForm)
    this.dataSaved = false;
    const user = this.userForm.value;
    //Invoking the CreateUser function
    this.CreateUser(user);
    this.userForm.reset();
  }
  //create a function onSubmit CreateUser
  CreateUser(user: User) {
    if (this.userIdUpdate == null) {
      this.userservice.createUser(user).subscribe(
        () => {
          this.dataSaved = true;
          this.massage = 'Record saved Successfully';
          this.loadAllUsers();
          this.userIdUpdate = null;
          this.userForm.reset();
        }
      );
    } else {
      user.id = this.userIdUpdate;
      this.userservice.updateEmployee(user).subscribe(() => {
        this.dataSaved = true;
        this.massage = 'Record Updated Successfully';
        this.loadAllUsers();
        this.userIdUpdate = null;
        this.userForm.reset();
      });
    }
  }
  ngOnInit(): void {
    this.loadAllUsers();
    console.log(this.allUsers)
    this.userForm=new FormGroup({
      'Name':new FormControl(null),
      'Email':new FormControl(null),
      'Gender':new FormControl(null),
      'Username':new FormControl(null),
      'Password':new FormControl(null)
    })
  }
  loadAllUsers()
  {
    this.allUsers=this.userservice.getAllUsers();
  }
}

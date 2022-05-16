import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup | any;
  name: FormControl | any;
  // modelName: FormControl | any;
  // Email: FormControl | any;
  Pass: FormControl | any;
  constructor() { }
  ngOnInit() {
    this.name = new FormControl('', [Validators.required, Validators.minLength(4)]);
    // this.modelName = new FormControl('', [Validators.required, Validators.minLength(3)]);
    // this.Email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
    this.Pass = new FormControl('', [Validators.required, Validators.minLength(6),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$')]);
    this.myForm = new FormGroup({
      'name': this.name,
      // 'modelName': this.modelName,
      // 'Email': this.Email,
      'Pass': this.Pass
    });
  }
  

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      user: [''],
      pass: [''],
    })

  }

  get fields() { return this.loginForm.controls; }

  ngOnInit(): void {
  }




  loginUser() {
    let responseLogin: String = "";
    console.log("llegue", this.fields.user.value);
    if (this.fields.user.value == "admin" && this.fields.pass.value == "admin") {
      responseLogin = "OK";
    } else {
      responseLogin = "FAIL";
    }
    alert(responseLogin);
    return responseLogin;

  }

}

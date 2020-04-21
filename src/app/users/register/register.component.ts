import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  registerForm = {
    username: "",
    email: "",
    password: ""
  }

  ngOnInit(): void {
  }

  registerUser(form) {
    const { username, email, password } = this.registerForm;
    this.http.post("http://localhost:3005/users/register", { username, email, password }, {
      headers: {
        "content-type": "application/json"
      }
    }).subscribe((response)=>{
      console.log(response);
    })
  }

}

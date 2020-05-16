import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  registerName
  registerMailId
  registerPassword
  loginPassword
  loginMailId
  mouseoverLogin
  mouseoverRegister
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
  }
onLoginSubmit(form: NgForm) {
  this.http.post('http://localhost:8080/login', {"user":form.value}).subscribe((data:any)=>{
    if(data.success==true){

      localStorage.setItem("user", JSON.stringify(data.user));
      console.log(localStorage.getItem("user"));
      this.route.navigate(['/home']);
    }
    else{
      alert(data.message)

    }
  });

}
onRegisterSubmit(form: NgForm) {
  this.http.post('http://localhost:8080/register', {"user":form.value}).subscribe((data:any)=>{
    if(data.success==true){
      alert(data);
      localStorage.setItem("user", JSON.stringify(data.user))
      this.route.navigate(['/home']);
    }
    else{
      alert(data.message)

    }
  });

}

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
onSubmit(loginForm: NgForm) {
  this.http.post('http://localhost:8080/login', loginForm.value).subscribe((data)=>{
    console.log(data);
  });

}
}

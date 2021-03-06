import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, Employee } from '../service/httpclient.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usern: string;
  pass: string;

  employee: Employee;


  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
  }



  login(usern, pass) {

    this.httpClientService.loginemp(new Employee(null, usern, pass, null, null)).subscribe(res => {
      this.employee = res;
      if (this.employee != null) {
        alert("Welcome " + this.employee.id);
        sessionStorage.setItem('name', this.employee.name);
        this.router.navigate(['home']);
      } else {
        alert("WC");
      }


    });



  }



}

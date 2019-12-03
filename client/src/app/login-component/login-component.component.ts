import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private router : Router) { }

  ngOnInit() {
  }
  login(user){
    this.userService.login(user.value).subscribe(res=>{
      console.log(res)
      localStorage.setItem('userInfo',JSON.stringify(res))
      this.router.navigate(['dashboard'])
    })
  }
}

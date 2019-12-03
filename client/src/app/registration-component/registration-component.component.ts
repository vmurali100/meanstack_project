import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {

  }
  register(userForm){
    this.userService.register(userForm.value).subscribe(res=>{
      console.log("User Added")
      this.router.navigate(['/login'])
    })
  }
}

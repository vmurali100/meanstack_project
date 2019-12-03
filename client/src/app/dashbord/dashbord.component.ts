import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  displayedColumns: string[] = ['title', 'price','buy'];
  dataSource = ELEMENT_DATA;
  constructor(private userService:UserService,private route:Router) { }

  ngOnInit() {
    this.userService.getStocks().subscribe(res=>{
    this.dataSource = res['data']
    })
  }

  buyStock(stock){
    // this.userService.buyStock(stock).subscribe(res=>{
    //   this.route.navigate(['/userStocks'])
    // })
    this.route.navigate(['/userStocks'])

  }

}
const ELEMENT_DATA = [
  {
    "_id" : "5de59fb2697229379a440e08",
    "title" : "ABC",
    "price" : 123
}  ,
{
  "_id" : "5de59fb2697229379a440e08",
  "title" : "ABC",
  "price" : 123
},
{
  "_id" : "5de59fb2697229379a440e08",
  "title" : "ABC",
  "price" : 123
},{
  "_id" : "5de59fb2697229379a440e08",
  "title" : "ABC",
  "price" : 123
}

];
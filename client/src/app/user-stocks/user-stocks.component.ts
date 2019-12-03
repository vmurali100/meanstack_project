import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-stocks',
  templateUrl: './user-stocks.component.html',
  styleUrls: ['./user-stocks.component.css']
})
export class UserStocksComponent implements OnInit {
  userStocks: any;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getStocks().subscribe(res=>{
      this.userStocks = res['data']
      console.log(this.userStocks)
    })
  }
  sellStock(stock){
    this.userService.sellStocks(stock).subscribe(res=>{
      console.log("Stock Sold out")
    })
  }
}

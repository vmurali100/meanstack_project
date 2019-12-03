import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private _http:HttpClient) { }

  register(user){
    return this._http.post("http://localhost:9090/api/v1/register/user",user)
  }

  login(user){
    return this._http.post("http://localhost:9090/api/v1/login",user)
  }

  getStocks(){
    let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InZtdXJhbGkxMDAiLCJpYXQiOjE1NzUzNjUwODF9.CiEonb0n0eidVIM1aQB2gUueVEaISzlZEqksBOTHSLM";
    let headers={ 'Content-Type': 'application/json', 'Authorization': "Bearer "+token}
    let headers_object = new HttpHeaders(headers);

      const httpOptions = {
        headers: headers_object
      };

    return this._http.get("http://localhost:9090/api/v1/dashboard",httpOptions)
  }

  buyStock(stock){
    let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InZtdXJhbGkxMDAiLCJpYXQiOjE1NzUzNjQwMDR9.zZHo6PM624yBO9GRqXJNruo71txJLyWrSZeingvS354";
    return this._http.post("http://localhost:9090/api/v1/buystock",stock)

  }

  sellStocks(stock){
    return this._http.post("http://localhost:9090/api/v1/sellstock",stock)
  }

  getUserStocks(){
    let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InZtdXJhbGkxMDAiLCJpYXQiOjE1NzUzNjU4NDl9.hjdBob-pdg8t7eCdNVQIY31BIV_iXuv2HAxznTfXizc";
    let headers={ 'Content-Type': 'application/json', 'Authorization': "Bearer "+token}
    let headers_object = new HttpHeaders(headers);

      const httpOptions = {
        headers: headers_object
      };
    return this._http.get("http://localhost:9090/api/v1/getUserStocks")
  }
}

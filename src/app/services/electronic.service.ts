import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {
baseUrl:string = 'http://localhost:3005/electronics';
  constructor(private httpClient : HttpClient) { }
  GetAll(){
    return this.httpClient.get(this.baseUrl);
  }
  GetById(id:number){
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  Insert(elec : any){
    return this.httpClient.post(this.baseUrl,elec)
  }
  Update(id:number,newElec:any){
    return this.httpClient.put(`${this.baseUrl}/${id}`,newElec);
  }
  Delete(id:number){
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  constructor(private http:HttpClient) { }

  getData(vall){
    return this.http.get(`https://guarded-spire-16362.herokuapp.com/get_region/${vall}`);
  }
  
  


}

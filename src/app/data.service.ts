import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import{tempdata} from './tempdata'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  testData = "angular test data"
  employeeData
  constructor(private http: HttpClient) { }

  getDataFromHttpGetMethod() {
   return this.http.get('http://localhost:4500/assets/tempdata.json')
  }
}

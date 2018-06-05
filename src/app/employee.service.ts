import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1, "name": "ashu", "age": 20},
      {"id":2, "name": "shafi", "age": 18},
      {"id":3, "name": "anuj", "age": 20},
      {"id":4, "name": "aniket", "age": 8}
    ];
  }
}

import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  users:User[]=[
    {name:'ahmed' ,age:22,geneder:'m',salary:10000},
    {name:'ali' ,age:22,geneder:'m',salary:10000},
    {name:'mostafa' ,age:22,geneder:'m',salary:10000},
    {name:'ola' ,age:22,geneder:'f',salary:10000},
    {name:'noor' ,age:22,geneder:'f',salary:10000},
  ]
  constructor() { 
  
  }
}

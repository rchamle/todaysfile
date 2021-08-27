import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  logmessages : string[] = []

  add(logmessage:string){
    this.logmessages.push(logmessage)
  }

  clear(){
    this.logmessages = []
  }

  constructor() { }
}

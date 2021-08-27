import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './empdata';
import { Observable,of } from 'rxjs';
import { LoggerService } from './logger.service';


@Injectable()

export class EmpService {

  getEmployee():Observable<Employee[]>{
    const empdata = of(EMPLOYEES)
    this.loggerservice.add('Employees are fetched')
    return empdata
  }

  getEmployees(id:number):Observable<Employee>{
    const empdata = EMPLOYEES.find(e=>e.id == id)!
    this.loggerservice.add('Employee selected '+id)
    return of(empdata)
  }

  constructor(private loggerservice:LoggerService) { }
}

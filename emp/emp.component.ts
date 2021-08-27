import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from '../employee';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  empdata:Employee[] = []

  selectedemployee?:Employee

  selectemp(e:Employee){
   // console.log(e)
    this.selectedemployee = e
    this.loggerservice.add(`You have selected employee id = ${e.id}`)
  }

  constructor(private empservice:EmpService,private loggerservice:LoggerService ) { }

  getEmployeesFromService(){
    this.empservice.getEmployee()
    .subscribe(employeedata=>this.empdata = employeedata)
  }

  ngOnInit(): void {
    this.getEmployeesFromService()
    
  }

}

import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees : Employee[] = []

  constructor(private empservice : EmpService) { }

  getEmployees(){
    this.empservice.getEmployee().subscribe(empdata=>this.employees=empdata.slice(1,5))
  }

  ngOnInit(): void {
    this.getEmployees()
  }

}

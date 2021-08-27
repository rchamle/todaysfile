import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

 // @Input() employee: Employee|undefined

  employee : Employee|undefined

  getEmployees(){
    
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.empservice.getEmployees(id).subscribe(empdata => this.employee=empdata)
  }

  constructor(private route:ActivatedRoute,private empservice:EmpService,private location:Location) { }

  goBack(){
    this.location.back()
  }

  ngOnInit(): void {
    this.getEmployees()
  }

}

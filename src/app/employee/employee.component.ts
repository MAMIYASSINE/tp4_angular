import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee: Employee | undefined;
  isNewEmployee: boolean = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employees = this.employeeService.getEmployees();
  }

  selectEmployee(employee: Employee): void {
    this.selectedEmployee = { ...employee };
    this.isNewEmployee = false;
  }

  addEmployee(): void {
    this.selectedEmployee = { id: 0, name: '', email: '', Tel: '' };
  }
}

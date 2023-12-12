import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'John Doe', email: 'John_Doe@gmail.com', Tel: '11223344' },
    { id: 2, name: 'Jane Smith', email: 'Jane_Smith@gmail.com', Tel: '55667788' }
    // Add more sample data or an empty array
  ];

  constructor() {}

  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee): void {
    // Add logic to assign unique ID
    this.employees.push(employee);
  }

  updateEmployee(updatedEmployee: Employee): void {
    const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }
}

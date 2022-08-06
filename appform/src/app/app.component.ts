import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Appformulario';

  employees = [
    { 'name': 'Jhoy', position: 'manager'},
    { 'name': 'Juan', position: 'Designer'},
    { 'name': 'Nilton', position: 'Programmer'}
  ];

  model:any = {};


  addEmployee():void{
    this.employees.push(this.model);
  }

  deleteEmployee():void{

  }

  editEmployee():void{

  }

  updateEmployee():void{

  }

}






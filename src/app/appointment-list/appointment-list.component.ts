import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{

  newAppointmentDesc: string = '';
  newAppointmentDate: Date = new Date();
  idCounter = 1;


appointments: Appointment[] = []

ngOnInit(): void {
  let savedAppointments = localStorage.getItem("appointments");
  this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
}

addAppointment(){

  if(this.newAppointmentDate && this.newAppointmentDesc.trim().length)
  {
  let newAppointment = {
    id: this.idCounter,
    description: this.newAppointmentDesc,
    date: this.newAppointmentDate
  }
 this.appointments.push(newAppointment);

 this.newAppointmentDate = new Date();
 this.newAppointmentDesc = '';
 this.idCounter++;

 localStorage.setItem("appointments",JSON.stringify(this.appointments));

}
}

deleteAppointment(index: number){
    this.appointments.splice(index,1);
    
localStorage.setItem("appointments",JSON.stringify(this.appointments));
}
}



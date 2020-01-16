import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list:any[] = [];

  constructor(protected listP:ServiceService) { }
  /**
   * se importa el servicio desde la ubicacion,
   * se define un array list que es donde se almacena los datos
   * del json, en el ngoninit se llama el metodo getList y 
   * se asigna la respuesta al array list.
   */
  ngOnInit() {
    this.listP.getList()
    .subscribe(
      (data) => {
        this.list = data['results'];
        console.log(this.list);
      },
      (error) =>{
        console.log(error);
      }
    )
      
  }

  
  

}

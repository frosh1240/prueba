import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  /**
   * se crea una funcion getlist donde se carga de obtener los datos del archivo js
   * alojado en un servidor
   */
  constructor(private http:HttpClient) { }
  url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu";
  getList(){
    return this.http.get(this.url);
  }
}

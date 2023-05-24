import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filter } from '../interface/Filter';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor(private http: HttpClient) { }

  private url = 'https://filterfunction.azurewebsites.net/api/FilterFunction?'
  //https://filterfunction.azurewebsites.net/api/FilterFunction?filter={"name":"", "description":""}

  //Parâmetro filter: possui os valores dos inputs da tela (name e description) 
  getData(filter: Filter): Observable<Filter[]> {
    const filterParams = JSON.stringify(filter); //Exemplo: {"name":"item 1", "description":"A"}
    const urlFilter = `${this.url}filter=${filterParams}`; //Concatena a string url com 'filter=' e {"name":"item 1", "description":"A"}
    return this.http.get<Filter[]>(urlFilter); //Faz o HttpRequest utilizando a url informada
  }
}

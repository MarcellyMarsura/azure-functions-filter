import { Component } from '@angular/core';
import { Filter } from 'src/app/interface/Filter';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  resultadosFiltrados: Filter[] = [];
}

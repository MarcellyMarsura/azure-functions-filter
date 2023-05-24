import { Component, Input } from '@angular/core';
import { Filter } from 'src/app/interface/Filter';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() resultadosFiltrados: Filter[] = []; //Recebe o @Output do filter
}

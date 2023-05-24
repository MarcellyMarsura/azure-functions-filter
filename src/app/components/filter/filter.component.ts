import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Filter } from 'src/app/interface/Filter';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

    constructor(private filterService: FilterService) {}
    @Output() filter = new EventEmitter<Filter[]>(); //Output dos dados filtrados => deverá ser inserido no @Input da table
    
    //Propriedades do filtro => Preenchidas com o [(ngModel)] do input (filter.component.html)
    name: string = '';
    description: string = '';

    ngOnInit(): void {
      const filter: Filter = { //Monta o filtro com os valores dos inputs da tela
        name: this.name,
        description: this.description
      };

      this.getData(filter);
    }

    pesquisar(): void {
      const filter: Filter = { //Monta o filtro com os valores dos inputs da tela
        name: this.name,
        description: this.description
      };

      this.getData(filter);
    }

    getData(filter: Filter): void {
      this.filterService.getData(filter).subscribe(
        (resultados: Filter[]) => {
          //Sucesso => Envia a lista de dados que a function retornou para o output
          this.filter.emit(resultados);
        },
        (error: any) => {
          console.error(error);
        }
      );
    }


}

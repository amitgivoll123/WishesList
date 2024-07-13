import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { wishItem } from '../../../shared/models/wishitem';

const filters = [
  (item:wishItem) => item,
  (item:wishItem) => item.isComplete,
  (item:wishItem) => !item.isComplete
]

@Component({
  selector: 'app-wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent {
  @Input() filter : any;
  @Output() filterChange = new EventEmitter<any>();
  
  listFilter : any = '0';

  ngOnInit(): void {
    this.updateFilter('0');
  }
  updateFilter(value : any){
    this.filter = filters[value]
    this.filterChange.emit(this.filter);
  }

  
}

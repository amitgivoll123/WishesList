import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../../../shared/models/wishitem';

@Component({
  selector: 'app-add-wish-form',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {
    @Output() addWish = new EventEmitter<wishItem>()
    @Input() wishes : wishItem[] = [];

  newWishText = '';

  addNewWish(){
    if (this.newWishText != '') this.addWish.emit(new wishItem(this.wishes.length + 1, this.newWishText))
    this.newWishText = '';
  }
  

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
//import events from './../../shared/services/EventService'
import { wishItem } from '../../../shared/models/wishitem';
import { EventService } from '../../../shared/services/EventService';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wish! : wishItem;

  constructor(private events : EventService) {}

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
  
  get cssClasses() {
    //return this.fullfilled ? ['strikeout','text-muted'] : [];
    //return {'strikeout text-muted': this.fullfilled};
    return {'strikeout': this.wish.isComplete, 'text-muted' : this.wish.isComplete};
  }

  removeWish(){
    this.events.emit('removeWish',this.wish);
  }
}

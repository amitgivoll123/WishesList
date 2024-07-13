import { Component, OnInit } from '@angular/core';
import { wishItem } from '../../shared/models/wishitem';
import { EventService } from '../../shared/services/EventService';
import { WishService } from './wish.service';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [WishListComponent, WishFilterComponent, AddWishFormComponent],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit{
  title = 'LearnAZAngular';
  items : wishItem[] = [];

  

  filter : any

  constructor(events : EventService, private wishService: WishService) {
    events.listen('removeWish',(wish : any) =>{
      this.items.splice(this.items.indexOf(wish),1);
    })
  }
  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data:any) => {
      data.forEach((wish:any) => {
        this.items.push(new wishItem(wish.id, wish.wishText,wish.isComplete))
      });
    },
    (error : any) => {
      alert(error.message);
    })
  }

  SaveChanges(){

    this.wishService.saveWishes(this.items).subscribe();
  }
}

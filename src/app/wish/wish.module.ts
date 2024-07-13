import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from "./wish-list/wish-list.component";
import { AddWishFormComponent } from "./add-wish-form/add-wish-form.component";
import { WishFilterComponent } from "./wish-filter/wish-filter.component";
import { FormsModule } from '@angular/forms';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    WishListComponent, AddWishFormComponent, WishFilterComponent, WishListItemComponent
  ],
  exports: [WishListComponent, AddWishFormComponent, WishFilterComponent, WishListItemComponent]
})
export class WishModule { }
 
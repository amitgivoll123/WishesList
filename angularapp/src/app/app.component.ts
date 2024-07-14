import { Component } from '@angular/core';
import { WishComponent } from './wish/wish.component';
import { WishModule } from './wish/wish.module';
import { ContactComponent } from './contact/contact.component';
import { ContactModule } from './contact/contact.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WishModule, WishComponent, ContactComponent, ContactModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  
}

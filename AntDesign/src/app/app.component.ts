import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFlexModule } from 'ng-zorro-antd/flex';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NzListModule, NzTypographyModule, NzButtonModule, NzFlexModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVertical = true;
  items = [    { name: 'Product A', price: 10 },    { name: 'Product B', price: 15 },    { name: 'Product C', price: 20 }  ];
  
  // Define a signal for the list of items
  itemList = signal(this.items);
  
  // Define a computed value for the total price
  totalPrice = computed(() => {
    return this.itemList().reduce((acc, curr) => acc + curr.price, 0);
  });
  
  removeItem(item: { name: string; price: number; }) {
    // Update the itemList signal by removing the selected item
    this.itemList.set(this.itemList().filter((i) => i !== item));
  }

}

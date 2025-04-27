import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [NzCarouselModule, NzIconModule],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SlideComponent {
  array = [1, 2, 3, 4];
}

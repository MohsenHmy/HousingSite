import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideComponent } from "./slide/slide.component";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { ServicesComponent } from "./ourServices/services.component";
import { SpecialCoursesComponent } from './special-courses/special-courses.component';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, NavbarComponent, SlideComponent, NzIconModule, 
      NzLayoutModule, NzMenuModule, FormsModule, NzFlexModule, ServicesComponent, SpecialCoursesComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AzadUni';
  isVertical = false;
}

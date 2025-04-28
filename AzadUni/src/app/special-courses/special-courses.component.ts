import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
    selector: 'app-special-courses',
    imports: [NzCardModule, NzCarouselModule, CommonModule],
    templateUrl: './special-courses.component.html',
    styleUrl: './special-courses.component.css'
})
export class SpecialCoursesComponent {
    cards = [
        { title: 'Card 1', description: 'Description 1', cover: null },
        { title: 'Card 2', description: 'Description 2', cover: null },
        { title: 'Card 3', description: 'Description 3', cover: null },
    ];

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingCoursesComponent } from './coding-courses.component';

describe('CodingCoursesComponent', () => {
  let component: CodingCoursesComponent;
  let fixture: ComponentFixture<CodingCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodingCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

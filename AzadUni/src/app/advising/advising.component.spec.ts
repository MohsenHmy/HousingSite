import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisingComponent } from './advising.component';

describe('AdvisingComponent', () => {
  let component: AdvisingComponent;
  let fixture: ComponentFixture<AdvisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvisingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

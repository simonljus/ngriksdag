import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonfilterComponent } from './personfilter.component';

describe('PersonfilterComponent', () => {
  let component: PersonfilterComponent;
  let fixture: ComponentFixture<PersonfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

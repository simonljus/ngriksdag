import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppdragComponent } from './uppdrag.component';

describe('UppdragComponent', () => {
  let component: UppdragComponent;
  let fixture: ComponentFixture<UppdragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UppdragComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UppdragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

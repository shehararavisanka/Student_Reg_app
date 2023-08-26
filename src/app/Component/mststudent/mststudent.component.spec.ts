import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MststudentComponent } from './mststudent.component';

describe('MststudentComponent', () => {
  let component: MststudentComponent;
  let fixture: ComponentFixture<MststudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MststudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MststudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

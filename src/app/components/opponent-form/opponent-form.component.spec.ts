import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentFormComponent } from './opponent-form.component';

describe('OpponentFormComponent', () => {
  let component: OpponentFormComponent;
  let fixture: ComponentFixture<OpponentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpponentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

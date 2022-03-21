import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsListComponentComponent } from './positions-list-component.component';

describe('PositionsListComponentComponent', () => {
  let component: PositionsListComponentComponent;
  let fixture: ComponentFixture<PositionsListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionsListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

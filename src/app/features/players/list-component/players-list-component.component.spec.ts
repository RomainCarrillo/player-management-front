import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersListComponentComponent } from './players-list-component.component';

describe('PlayersListComponentComponent', () => {
  let component: PlayersListComponentComponent;
  let fixture: ComponentFixture<PlayersListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

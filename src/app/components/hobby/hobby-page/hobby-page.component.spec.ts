import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyPageComponent } from './hobby-page.component';

describe('HobbyPageComponent', () => {
  let component: HobbyPageComponent;
  let fixture: ComponentFixture<HobbyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

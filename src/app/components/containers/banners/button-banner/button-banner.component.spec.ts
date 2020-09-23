import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBannerComponent } from './button-banner.component';

describe('ButtonBannerComponent', () => {
  let component: ButtonBannerComponent;
  let fixture: ComponentFixture<ButtonBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

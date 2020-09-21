import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBannerContainerComponent } from './button-banner-container.component';

describe('ButtonBannerContainerComponent', () => {
  let component: ButtonBannerContainerComponent;
  let fixture: ComponentFixture<ButtonBannerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonBannerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBannerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

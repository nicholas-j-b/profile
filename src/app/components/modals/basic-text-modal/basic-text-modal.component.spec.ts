import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTextModalComponent } from './basic-text-modal.component';

describe('BasicTextModalComponent', () => {
  let component: BasicTextModalComponent;
  let fixture: ComponentFixture<BasicTextModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTextModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTextModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

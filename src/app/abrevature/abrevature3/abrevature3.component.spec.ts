import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Abrevature3Component } from './abrevature3.component';

describe('Abrevature3Component', () => {
  let component: Abrevature3Component;
  let fixture: ComponentFixture<Abrevature3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abrevature3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Abrevature3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Abrevature4Component } from './abrevature4.component';

describe('Abrevature4Component', () => {
  let component: Abrevature4Component;
  let fixture: ComponentFixture<Abrevature4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abrevature4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Abrevature4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

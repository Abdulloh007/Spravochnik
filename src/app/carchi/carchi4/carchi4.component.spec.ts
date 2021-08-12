import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carchi4Component } from './carchi4.component';

describe('Carchi4Component', () => {
  let component: Carchi4Component;
  let fixture: ComponentFixture<Carchi4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carchi4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carchi4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

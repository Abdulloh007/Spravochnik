import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carchi6Component } from './carchi6.component';

describe('Carchi6Component', () => {
  let component: Carchi6Component;
  let fixture: ComponentFixture<Carchi6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carchi6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carchi6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

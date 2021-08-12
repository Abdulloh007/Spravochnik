import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carchi3Component } from './carchi3.component';

describe('Carchi3Component', () => {
  let component: Carchi3Component;
  let fixture: ComponentFixture<Carchi3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carchi3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carchi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

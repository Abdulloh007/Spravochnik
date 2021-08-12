import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carchi2Component } from './carchi2.component';

describe('Carchi2Component', () => {
  let component: Carchi2Component;
  let fixture: ComponentFixture<Carchi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carchi2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carchi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

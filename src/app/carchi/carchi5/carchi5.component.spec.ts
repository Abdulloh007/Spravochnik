import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carchi5Component } from './carchi5.component';

describe('Carchi5Component', () => {
  let component: Carchi5Component;
  let fixture: ComponentFixture<Carchi5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carchi5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carchi5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

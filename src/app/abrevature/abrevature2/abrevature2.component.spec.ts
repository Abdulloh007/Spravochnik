import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Abrevature2Component } from './abrevature2.component';

describe('Abrevature2Component', () => {
  let component: Abrevature2Component;
  let fixture: ComponentFixture<Abrevature2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abrevature2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Abrevature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

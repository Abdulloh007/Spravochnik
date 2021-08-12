import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Abrevature5Component } from './abrevature5.component';

describe('Abrevature5Component', () => {
  let component: Abrevature5Component;
  let fixture: ComponentFixture<Abrevature5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abrevature5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Abrevature5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

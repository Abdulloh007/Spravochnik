import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bi2Component } from './bi2.component';

describe('Bi2Component', () => {
  let component: Bi2Component;
  let fixture: ComponentFixture<Bi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bi2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bi3Component } from './bi3.component';

describe('Bi3Component', () => {
  let component: Bi3Component;
  let fixture: ComponentFixture<Bi3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bi3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

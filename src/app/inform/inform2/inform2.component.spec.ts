import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inform2Component } from './inform2.component';

describe('Inform2Component', () => {
  let component: Inform2Component;
  let fixture: ComponentFixture<Inform2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inform2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

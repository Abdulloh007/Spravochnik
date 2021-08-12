import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bi8Component } from './bi8.component';

describe('Bi8Component', () => {
  let component: Bi8Component;
  let fixture: ComponentFixture<Bi8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bi8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bi8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

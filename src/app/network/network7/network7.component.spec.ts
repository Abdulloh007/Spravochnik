import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Network7Component } from './network7.component';

describe('Network7Component', () => {
  let component: Network7Component;
  let fixture: ComponentFixture<Network7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Network7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Network7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

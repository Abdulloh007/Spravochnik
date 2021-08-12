import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Network3Component } from './network3.component';

describe('Network3Component', () => {
  let component: Network3Component;
  let fixture: ComponentFixture<Network3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Network3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Network3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

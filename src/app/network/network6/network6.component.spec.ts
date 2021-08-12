import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Network6Component } from './network6.component';

describe('Network6Component', () => {
  let component: Network6Component;
  let fixture: ComponentFixture<Network6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Network6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Network6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

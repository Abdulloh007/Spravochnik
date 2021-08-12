import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Network8Component } from './network8.component';

describe('Network8Component', () => {
  let component: Network8Component;
  let fixture: ComponentFixture<Network8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Network8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Network8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

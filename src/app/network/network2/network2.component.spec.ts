import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Network2Component } from './network2.component';

describe('Network2Component', () => {
  let component: Network2Component;
  let fixture: ComponentFixture<Network2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Network2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Network2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

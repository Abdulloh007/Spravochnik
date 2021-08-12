import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Network4Component } from './network4.component';

describe('Network4Component', () => {
  let component: Network4Component;
  let fixture: ComponentFixture<Network4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Network4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Network4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

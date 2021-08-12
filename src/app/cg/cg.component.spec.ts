import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CGComponent } from './cg.component';

describe('CGComponent', () => {
  let component: CGComponent;
  let fixture: ComponentFixture<CGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

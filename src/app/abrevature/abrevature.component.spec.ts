import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrevatureComponent } from './abrevature.component';

describe('AbrevatureComponent', () => {
  let component: AbrevatureComponent;
  let fixture: ComponentFixture<AbrevatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbrevatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrevatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

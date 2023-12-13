import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSuvComponent } from './auto-suv.component';

describe('AutoSuvComponent', () => {
  let component: AutoSuvComponent;
  let fixture: ComponentFixture<AutoSuvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoSuvComponent]
    });
    fixture = TestBed.createComponent(AutoSuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

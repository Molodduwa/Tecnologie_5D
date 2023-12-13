import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCComponent } from './auto-c.component';

describe('AutoCComponent', () => {
  let component: AutoCComponent;
  let fixture: ComponentFixture<AutoCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoCComponent]
    });
    fixture = TestBed.createComponent(AutoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

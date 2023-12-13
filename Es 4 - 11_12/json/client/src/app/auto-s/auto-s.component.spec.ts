import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSComponent } from './auto-s.component';

describe('AutoSComponent', () => {
  let component: AutoSComponent;
  let fixture: ComponentFixture<AutoSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoSComponent]
    });
    fixture = TestBed.createComponent(AutoSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppplicationComponent } from './my-appplication.component';

describe('MyAppplicationComponent', () => {
  let component: MyAppplicationComponent;
  let fixture: ComponentFixture<MyAppplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAppplicationComponent]
    });
    fixture = TestBed.createComponent(MyAppplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

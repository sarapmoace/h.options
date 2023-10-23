import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedDataComponent } from './updated-data.component';

describe('UpdatedDataComponent', () => {
  let component: UpdatedDataComponent;
  let fixture: ComponentFixture<UpdatedDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatedDataComponent]
    });
    fixture = TestBed.createComponent(UpdatedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptdetailsComponent } from './deptdetails.component';

describe('DeptdetailsComponent', () => {
  let component: DeptdetailsComponent;
  let fixture: ComponentFixture<DeptdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeptdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

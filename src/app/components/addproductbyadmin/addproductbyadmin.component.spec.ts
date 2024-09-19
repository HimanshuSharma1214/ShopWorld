import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductbyadminComponent } from './addproductbyadmin.component';

describe('AddproductbyadminComponent', () => {
  let component: AddproductbyadminComponent;
  let fixture: ComponentFixture<AddproductbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproductbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproductbyadminComponent } from './editproductbyadmin.component';

describe('EditproductbyadminComponent', () => {
  let component: EditproductbyadminComponent;
  let fixture: ComponentFixture<EditproductbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproductbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditproductbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

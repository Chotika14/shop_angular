import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageproductComponent } from './pageproduct.component';

describe('PageproductComponent', () => {
  let component: PageproductComponent;
  let fixture: ComponentFixture<PageproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageproductComponent]
    });
    fixture = TestBed.createComponent(PageproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

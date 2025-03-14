import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageproductallComponent } from './pageproductall.component';

describe('PageproductallComponent', () => {
  let component: PageproductallComponent;
  let fixture: ComponentFixture<PageproductallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageproductallComponent]
    });
    fixture = TestBed.createComponent(PageproductallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

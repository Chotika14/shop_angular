import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageresigterComponent } from './pageresigter.component';

describe('PageresigterComponent', () => {
  let component: PageresigterComponent;
  let fixture: ComponentFixture<PageresigterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageresigterComponent]
    });
    fixture = TestBed.createComponent(PageresigterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

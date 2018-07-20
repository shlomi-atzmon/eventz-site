
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyComponent } from './supplys.component';

describe('SupplyComponent', () => {
  let component: SupplyComponent;
  let fixture: ComponentFixture<SupplyComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

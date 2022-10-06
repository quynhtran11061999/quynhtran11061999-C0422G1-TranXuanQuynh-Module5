import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenxeComponent } from './benxe.component';

describe('BenxeComponent', () => {
  let component: BenxeComponent;
  let fixture: ComponentFixture<BenxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

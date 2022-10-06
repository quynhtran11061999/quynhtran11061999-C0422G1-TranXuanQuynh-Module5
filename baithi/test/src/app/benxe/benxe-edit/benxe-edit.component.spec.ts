import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenxeEditComponent } from './benxe-edit.component';

describe('BenxeEditComponent', () => {
  let component: BenxeEditComponent;
  let fixture: ComponentFixture<BenxeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenxeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenxeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

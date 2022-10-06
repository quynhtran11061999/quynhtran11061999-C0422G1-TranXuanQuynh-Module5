import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenxeCreateComponent } from './benxe-create.component';

describe('BenxeCreateComponent', () => {
  let component: BenxeCreateComponent;
  let fixture: ComponentFixture<BenxeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenxeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenxeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

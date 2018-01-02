import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFeaturesComponent } from './angular-features.component';

describe('AngularFeaturesComponent', () => {
  let component: AngularFeaturesComponent;
  let fixture: ComponentFixture<AngularFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

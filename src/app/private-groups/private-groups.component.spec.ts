import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateGroupsComponent } from './private-groups.component';

describe('PrivateGroupsComponent', () => {
  let component: PrivateGroupsComponent;
  let fixture: ComponentFixture<PrivateGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

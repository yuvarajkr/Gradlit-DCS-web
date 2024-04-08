import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserInARoleComponent } from './edit-user-in-a-role.component';

describe('EditUserInARoleComponent', () => {
  let component: EditUserInARoleComponent;
  let fixture: ComponentFixture<EditUserInARoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserInARoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserInARoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

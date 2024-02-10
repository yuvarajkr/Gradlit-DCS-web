import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubNotificationComponent } from './club-notification.component';

describe('ClubNotificationComponent', () => {
  let component: ClubNotificationComponent;
  let fixture: ComponentFixture<ClubNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

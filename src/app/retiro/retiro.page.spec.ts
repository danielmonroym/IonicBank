import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetiroPage } from './retiro.page';

describe('RetiroPage', () => {
  let component: RetiroPage;
  let fixture: ComponentFixture<RetiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetiroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

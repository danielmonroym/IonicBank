import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsignacionPage } from './consignacion.page';

describe('ConsignacionPage', () => {
  let component: ConsignacionPage;
  let fixture: ComponentFixture<ConsignacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsignacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

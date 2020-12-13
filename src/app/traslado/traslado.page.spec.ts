import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrasladoPage } from './traslado.page';

describe('TrasladoPage', () => {
  let component: TrasladoPage;
  let fixture: ComponentFixture<TrasladoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasladoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrasladoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

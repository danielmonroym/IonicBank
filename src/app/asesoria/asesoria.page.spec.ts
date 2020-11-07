import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsesoriaPage } from './asesoria.page';

describe('AsesoriaPage', () => {
  let component: AsesoriaPage;
  let fixture: ComponentFixture<AsesoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesoriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsesoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

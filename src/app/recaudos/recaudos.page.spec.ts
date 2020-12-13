import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecaudosPage } from './recaudos.page';

describe('RecaudosPage', () => {
  let component: RecaudosPage;
  let fixture: ComponentFixture<RecaudosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecaudosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecaudosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEventoComponent } from './modify-evento.component';

describe('ModifyEventoComponent', () => {
  let component: ModifyEventoComponent;
  let fixture: ComponentFixture<ModifyEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyEventoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

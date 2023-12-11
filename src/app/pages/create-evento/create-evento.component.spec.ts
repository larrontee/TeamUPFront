import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventoComponent } from './create-evento.component';

describe('CreateEventoComponent', () => {
  let component: CreateEventoComponent;
  let fixture: ComponentFixture<CreateEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEventoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

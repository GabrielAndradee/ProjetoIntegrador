import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacriadaComponent } from './contacriada.component';

describe('ContacriadaComponent', () => {
  let component: ContacriadaComponent;
  let fixture: ComponentFixture<ContacriadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContacriadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContacriadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

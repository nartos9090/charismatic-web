import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopywriterComponent } from './copywriter.component';

describe('CopywriterComponent', () => {
  let component: CopywriterComponent;
  let fixture: ComponentFixture<CopywriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopywriterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopywriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

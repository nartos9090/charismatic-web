import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDetailComponent } from './editor-detail.component';

describe('DetailComponent', () => {
  let component: EditorDetailComponent;
  let fixture: ComponentFixture<EditorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

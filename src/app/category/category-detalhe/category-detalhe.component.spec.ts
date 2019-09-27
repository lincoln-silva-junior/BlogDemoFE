import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDetalheComponent } from './category-detalhe.component';

describe('CategoryDetalheComponent', () => {
  let component: CategoryDetalheComponent;
  let fixture: ComponentFixture<CategoryDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

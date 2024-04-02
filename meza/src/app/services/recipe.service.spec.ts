import { TestBed } from '@angular/core/testing';

// import { SpoonacularService } from './recipe.service';
import { RecipeService } from './recipe.service';

describe('SpoonacularService', () => {
  let service: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RegisterGetAllStudentsService } from './register-get-all-students.service';

describe('RegisterGetAllStudentsService', () => {
  let service: RegisterGetAllStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterGetAllStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

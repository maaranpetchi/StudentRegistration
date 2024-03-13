import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterGetAllStudentsService } from 'src/app/Services/Register_GetAllStudent/register-get-all-students.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {


  constructor(private StudentService: RegisterGetAllStudentsService, private router: Router) { }

  RegistrationForm = new FormGroup({
    studentName: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    studentCode: new FormControl("", Validators.required),
    department: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    dob: new FormControl("", Validators.required),
  });

  onlyAlphabets(event: KeyboardEvent) {
    const keyCode = event.key.charCodeAt(0);
    if (!((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122))) {
      event.preventDefault();
    }
  }

  onSubmit() {
    if (this.RegistrationForm.valid) {
      console.log("Form submitted:", this.RegistrationForm.value);

      let payload = {
        "studentName": this.RegistrationForm.value.studentName,
        "studentCode": this.RegistrationForm.value.studentCode,
        "studentDepartment": this.RegistrationForm.value.department,
        "studentGender": this.RegistrationForm.value.gender,
        "studentEmailId": this.RegistrationForm.value.email,
        "dob": this.RegistrationForm.value.dob
      }

      this.StudentService.registerStudent(payload).subscribe(res => {

        if(res.success == true){
        Swal.fire('Done', res.message, 'success').then(res => {
          if (res.isConfirmed) {
            this.router.navigate(['/dashboard']);
          }
        })

      }
      else{
        Swal.fire('info', res.message, 'info')
      }
      })
      

    } else {
      this.markFormGroupTouched(this.RegistrationForm);
    }
  }


  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}

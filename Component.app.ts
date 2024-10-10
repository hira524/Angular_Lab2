import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentForm: FormGroup;
  successMessage: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(60)]],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required]
    });
  }

  registerStudent() {
    if (this.studentForm.valid) {
      console.log('Form Submitted:', this.studentForm.value);
      // Display success message
      this.successMessage = 'Registration successful!';
      // Reset the form after submission
      this.studentForm.reset();
    } else {
      // Clear the success message if form is invalid
      this.successMessage = '';
    }

import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class ForgetPasswordComponent {
  user = {
    email: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Forget Password form submitted', this.user);
    }
  }
}

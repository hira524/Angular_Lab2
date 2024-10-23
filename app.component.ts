import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    imports: [
        FormsModule,
        UserListComponent,
        NgIf
    ],
  standalone: true
})
export class AppComponent {
  users: string[] = [];
  message: string = '';

  addUser(name: string) {
    if (name) {
      this.users.push(name);
      this.message = ''; // Clear any previous message
    }
  }

  removeUser(name: string) {
    this.users = this.users.filter(user => user !== name);
    this.message = `${name} deleted successfully!`; // Display success message
  }
}

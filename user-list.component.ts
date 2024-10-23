import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForOf } from '@angular/common';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  imports: [
    NgForOf,
    UserDetailComponent
  ],
  standalone: true
})
export class UserListComponent {
  @Input() users: string[] = [];
  @Output() userRemoved = new EventEmitter<string>();

  removeUser(user: string) {
    this.userRemoved.emit(user);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  standalone: true
})
export class UserDetailComponent {
  @Input() user!: string; // Assuming user is a string
  @Output() remove = new EventEmitter<void>();

  onRemove() {
    this.remove.emit();
  }
}

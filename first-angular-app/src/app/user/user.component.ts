import {
  Component,
  Input,
  computed,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>(); // select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUserFn() {
    this.select.emit(this.user.id);
  }
}

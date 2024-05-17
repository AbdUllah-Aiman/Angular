import { Component } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private service: AccountService, private router: Router) {}
  password = '';
  userName = '';
  state: boolean | null = null;
  login() {
    this.state = this.service.login(this.userName, this.password);
    if (this.state) this.router.navigateByUrl('/students');
  }
}

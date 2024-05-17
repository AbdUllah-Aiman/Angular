import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccountService } from '../../services/account/account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public accountServie: AccountService) {}
  logged:boolean= false;
  sub:Subscription|null=null;
}

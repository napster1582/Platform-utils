import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@lib/services';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private authService: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  onClickSignOut(): void {
    this.authService.logout();
    this._router.navigateByUrl('/auth/login');
  }

  onClickTemplate(): void {
    this._router.navigateByUrl('/templates/list');
  }
}

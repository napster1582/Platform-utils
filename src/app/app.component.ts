import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutVerticalComponent } from '@lib/components';
import { AuthService } from '@lib/services';
import { ThemeService } from '@lib/services/theme';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, LayoutVerticalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;

  constructor(private _authService: AuthService, private _themeService: ThemeService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this._authService.isLoggedIn$;

    this._themeService.init();
  }
}

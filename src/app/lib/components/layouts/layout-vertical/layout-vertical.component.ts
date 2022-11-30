import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FooterComponent } from '@lib/components';
import { SidebarComponent } from '@lib/components/sidebar/sidebar.component';

@Component({
  selector: 'app-layout-vertical',
  standalone: true,
  imports: [FooterComponent, SidebarComponent],
  templateUrl: './layout-vertical.component.html',
  styleUrls: ['./layout-vertical.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutVerticalComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

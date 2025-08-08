import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../shared/header/header';
import { SidebarComponent } from '../shared/sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  sidebarOpen = true;

  statsCards = [
    {
      title: 'This Month',
      value: '$58,356',
      icon: 'trending_up',
      color: 'primary',
      chart: [1, 3, 2, 4, 3, 5, 4]
    },
    {
      title: 'Last Month', 
      value: '$48,356',
      icon: 'trending_down',
      color: 'accent',
      chart: [2, 1, 3, 2, 4, 3, 5]
    }
  ];

  onToggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  getRandomHeight(): number {
    return Math.floor(Math.random() * 80) + 20;
  }

}

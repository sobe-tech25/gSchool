import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
  badge?: string;
  badgeColor?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    RouterModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class SidebarComponent {
  @Input() isOpen = true;

  menuItems: MenuItem[] = [
    {
      label: 'HOME',
      icon: 'home',
      children: [
        { label: 'General', icon: 'radio_button_checked', route: '/dashboard' },
        { label: 'Classic', icon: 'radio_button_unchecked', route: '/classic' },
        { label: 'Analytical', icon: 'radio_button_unchecked', route: '/analytical' },
        { label: 'Campaign', icon: 'radio_button_unchecked', route: '/campaign' },
        { label: 'Modern', icon: 'radio_button_unchecked', route: '/modern' },
        { label: 'Ecommerce', icon: 'radio_button_unchecked', route: '/ecommerce' }
      ]
    },
    {
      label: 'Front Pages',
      icon: 'web',
      children: [
        { label: 'Landing Page', icon: 'radio_button_unchecked', route: '/landing' },
        { label: 'About Us', icon: 'radio_button_unchecked', route: '/about' }
      ]
    },
    {
      label: 'APPS',
      icon: 'apps',
      children: [
        { label: 'Chat', icon: 'chat', route: '/chat' },
        { label: 'Calendar', icon: 'calendar_today', route: '/calendar' },
        { label: 'Email', icon: 'email', route: '/email' },
        { label: 'Kanban', icon: 'view_kanban', route: '/kanban' },
        { label: 'User Profile', icon: 'person', route: '/profile', badge: 'New', badgeColor: 'warn' },
        { label: 'Ecommerce', icon: 'shopping_cart', route: '/shop', badge: 'New', badgeColor: 'warn' }
      ]
    }
  ];

  userInfo = {
    name: 'Markarn Doe',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1'
  };
}
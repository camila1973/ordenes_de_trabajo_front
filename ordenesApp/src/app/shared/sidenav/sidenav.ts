// sidenav.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  standalone: false,
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.scss']
})
export class SidenavComponent implements OnInit {

  activeRoute: string = '';
  isCollapsed: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Escuchar cambios de ruta para actualizar el item activo
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateActiveRoute(event.url);
    });

    // Establecer ruta activa inicial
    this.updateActiveRoute(this.router.url);
  }

  navigate(route: string): void {
    this.router.navigate([`/${route}`]);
  }

  toggleSidenav(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  private updateActiveRoute(url: string): void {
    // Extraer la primera parte de la ruta para determinar qué item está activo
    const routeParts = url.split('/').filter(part => part !== '');
    this.activeRoute = routeParts.length > 0 ? routeParts[0] : '';
  }
}

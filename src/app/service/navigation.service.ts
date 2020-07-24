import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private readonly router: Router
  ) { }

  public navigateToPage(pageName: string): void {
    const route = '/' + pageName.toLowerCase();
    this.router.navigate([route]);
  }
}

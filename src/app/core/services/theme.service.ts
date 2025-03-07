import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  /**
   * The `initTheme` function checks the current theme stored in localStorage and applies the 'dark'
   * theme to the HTML element if it is set to 'dark'.
   */
  initTheme() {
    const currentTheme = localStorage.getItem('theme');
    const element: HTMLElement | null = document.querySelector('html');
    console.log(currentTheme);
    if (!currentTheme) {
      localStorage.setItem('theme', 'light');
    }

    if (currentTheme === 'dark') {
      element?.classList.toggle('dark');
    }
  }

  /**
   * The function `toggleTheme` toggles between light and dark themes by updating the theme in local
   * storage and adding/removing the 'dark' class to the HTML element.
   */
  toggleTheme() {
    const currentTheme = localStorage.getItem('theme');
    const element: HTMLHtmlElement | null = document.querySelector('html');

    if (currentTheme === 'light') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }

    if (element) {
      element.classList.toggle('dark');
    }
  }
}

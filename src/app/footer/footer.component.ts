import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  socialLinks = [
    { url: 'https://www.instagram.com', icon: 'instagram' },
    { url: 'https://www.linkedin.com', icon: 'linkedin' },
    { url: 'https://www.github.com', icon: 'github' }
  ];
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
    this.setActiveLink();
  }

  setActiveLink() {
    // Get the current URL path
    const currentPath = window.location.pathname as keyof typeof pathToLinkId;

    // Map paths to link IDs
    const pathToLinkId: { [key: string]: string } = {
        '/': 'home-link',
        '/about': 'about-link',
        '/projet': 'projet-link',
        '/contact': 'contact-link'
    };

    // Get the link ID for the current path
    const activeLinkId = pathToLinkId[currentPath];

    // Add the 'active' class to the corresponding link
    if (activeLinkId) {
        document.getElementById(activeLinkId)?.classList.add('active');
    }
  }
}

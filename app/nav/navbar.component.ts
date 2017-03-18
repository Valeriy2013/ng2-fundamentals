import {Component} from '@angular/core'

@Component({
    templateUrl: 'app/nav/navbar.component.html',
    selector: 'nav-bar',
    styles: [
        `   .nav.navbar-nav {font-size: 15px;}
            #searchForm { margin-right: 100px;}
            @media (max-width:1200px) { #searchForm {display: none; }}
    `]
})
export class NavBarComponent{}
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',

})
export class NavbarComponent {
  navtitle = "BiagioShop";
  navlink1= "Home";
  navlink2 = "Prodotti";
  botton1 = "login";
  botton2 = "registrati";
  logo = "B.png";
  link1 = "Console";
  link2 = "videogiochi";
  link3 = "accessori";;

}

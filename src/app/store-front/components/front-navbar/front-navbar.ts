import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Buscar } from '../../../shared/components/buscar/buscar';

@Component({
  selector: 'front-navbar',
  imports: [RouterLink, RouterLinkActive, Buscar],
  templateUrl: './front-navbar.html',
})
export class FrontNavbar { }

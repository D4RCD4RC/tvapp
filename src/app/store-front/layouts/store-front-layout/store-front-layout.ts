import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontNavbar } from "../../components/front-navbar/front-navbar";
import { Buscar } from "../../../shared/components/buscar/buscar";

@Component({
  selector: 'store-front-layout',
  imports: [RouterOutlet, FrontNavbar, Buscar],
  templateUrl: './store-front-layout.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class StoreFrontLayout { }

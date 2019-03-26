import { Component, OnInit } from '@angular/core';
import { MenuItem } from "./model/menu.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard', icon: 'fa fa-fw fa-dashboard', routerLink: ['/dashboard']
      },
      {
        label: 'Order List', icon: 'fa fa-fw fa-circle', routerLink: ['/list-user']
      },
      {
        label: 'Vendor List', icon: 'fa fa-fw fa-group', routerLink: ['/vendor-list']
      },
      {
        label: 'In Process', icon: 'fa fa-fw fa-cubes', routerLink: ['/list-user']
      },
      {
        label: 'Executed', icon: 'fa fa-fw fa-clone', routerLink: ['/list-user']
      },
      {
        label: 'Add Vendor Details', icon: 'fa fa-fw fa-user', routerLink: ['/add-vendor-details']
      }
    ];
  }
}

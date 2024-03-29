import { Component } from '@angular/core';
import { NavItems } from '../constant/constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  readonly NAV_ITEM = NavItems;
  status: boolean = false;
  sessison: string = this.NAV_ITEM.Dashboard;
  title: string = this.NAV_ITEM.Dashboard;

  addToggle() {
    this.status = !this.status;
  }

  onChangeSession(session: string): void {
    this.sessison = session;
    this.title = session;
  }
}
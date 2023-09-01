import { AdminService } from './../../Services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-form',
  templateUrl: './admin-user-form.component.html',
  styleUrls: ['./admin-user-form.component.scss']
})
export class AdminUserFormComponent implements OnInit {
  newAdminUsername: string = '';
  admins: any[] = [];

  constructor(private AdminService: AdminService) {}

  ngOnInit(): void {
    this.getAdmins();
  }

  addAdmin() {
    if (this.newAdminUsername) {
      this.AdminService.addAdmin(this.newAdminUsername);
      this.newAdminUsername = '';
      this.getAdmins();
    }
  }

  getAdmins(): void {
    this.admins = this.AdminService.getAdmins();
  }
}


import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user.model';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  dataUser: User[] = [];

  // displayedColumns: string[] = ['id', 'fullname', 'email', 'address', 'mobile', 'role'];

  ngOnInit(): void {
    this.getUsers();
  }

  constructor(
    private userService: UserService
  ){}

  getUsers() {
    this.userService.getAll()
    .subscribe((data: User[]) => {
      this.dataUser = data;
    });
  }

  updateUser() {

  }

  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe(data => {

    })
  }
}

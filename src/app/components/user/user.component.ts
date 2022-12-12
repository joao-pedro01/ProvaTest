import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  listUsers: User[] = [];

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listUsers) => {
      this.listUsers = listUsers;
    });
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Subscription} from "rxjs";
import {UserService} from "../user.service";
import {User} from "../model/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit, OnDestroy {
  userIds = Array.from({length: 10}, (_, i) => i + 1);
  userControl = new FormControl();
  private sub = new Subscription();

  constructor(private userService: UserService) {}

  get user(): User {
    return this.userService.user;
  }

  ngOnInit(): void {
    this.sub.add(
      this.userControl.valueChanges.subscribe(v => {
        return this.loadUser(v)
      })
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private loadUser(id: string) {
    this.userService.loadUser(id)
  }
}

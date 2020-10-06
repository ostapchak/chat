import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';
import { Message } from 'src/app/shared/models/message.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'name': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.form);
    const { email, password, name } = this.form.value;
    const user = new User(email, password, name);

    this.usersService.createUser(user)
      .subscribe((user: User) => {
        this.router.navigate(['/login'], {
          queryParams: {
            nowCanLogin: true
          }
        });
      });
  }

  forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usersService.getUser({'email': control.value})
        .subscribe((user: User) => {
          console.log(user)
          if(user) {
            resolve({forbiddenEmail:true});
          } else {
            resolve(null);
          }
        });
    });
  }

}

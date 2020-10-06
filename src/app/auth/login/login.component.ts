import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Message } from 'src/app/shared/models/message.model';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.message = new Message('danger', '');
    this.route.queryParams
     .subscribe((params: Params) => {
        if(params['nowCanLogin']) {
          this.showMessage({
            text: 'Now you can login!',
            type: 'success'
          });
        } else if (params['accessDenied']) {
          this.showMessage({
            text: 'You need to login!',
            type: 'warning'
          });
        }
     });

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit() {
    console.log(this.form);
    const { email, password, name } = this.form.value;
    const user = new User(email, password, name);
    this.usersService.getUser(user)
      .subscribe((user: User) => {
        console.log(user)
        if (user) {
          if (user.password === password) {
            this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user))
            this.authService.login();
            this.router.navigate(['/chat']);
          } else {
            this.showMessage({
              text:'The password is incorrect!',
              type: 'danger'
            });
          }
        } else {
          this.showMessage({
            text: 'User does not exist!',
            type: 'danger'
          });
        }
      });
  }

}

import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { UsersService } from '../shared/services/users.service';

@NgModule({
   declarations: [
      LoginComponent, 
      RegistrationComponent,
      AuthComponent
   ],
   imports: [
      CommonModule,
      SharedModule,
      AuthRoutingModule,
      MatToolbarModule,
      MatButtonModule,
      MatDialogModule,
      MatInputModule,
      MatCardModule,
      MatDividerModule
   ],
   providers: [UsersService]
})
export class AuthModule {}
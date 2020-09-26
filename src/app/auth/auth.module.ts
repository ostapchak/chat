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

@NgModule({
   declarations: [
      LoginComponent, 
      RegistrationComponent,
      AuthComponent
   ],
   imports: [
      CommonModule,
      AuthRoutingModule,
      MatToolbarModule,
      MatButtonModule,
      MatDialogModule,
      MatInputModule,
      MatCardModule
   ]
})
export class AuthModule {}
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginModal } from './login-modal';

/**
 * @ignore
 */
@NgModule({
  declarations: [
    LoginModal,
  ],
  imports: [
    IonicPageModule.forChild(LoginModal),
  ],
})
export class LoginModalPageModule {}

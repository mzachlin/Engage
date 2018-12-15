import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventInfoPage } from './event-info';

/**
 * @ignore
 */
@NgModule({
  declarations: [
    EventInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EventInfoPage),
  ],
})
export class EventInfoPageModule {}

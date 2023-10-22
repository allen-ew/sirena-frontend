import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeAdminComponent,
    HomeUserComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    HomeAdminComponent,
    HomeUserComponent
  ],
})
export class PagesModule { }

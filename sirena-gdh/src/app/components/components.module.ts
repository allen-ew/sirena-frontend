import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CardsComponent } from './cards/cards.component';
import { GraphicSectionComponent } from './graphic-section/graphic-section.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    CardsComponent,
    GraphicSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:
  [
    NavBarComponent,
    SideBarComponent,
    CardsComponent,
    GraphicSectionComponent
  ],
})
export class ComponentsModule { }

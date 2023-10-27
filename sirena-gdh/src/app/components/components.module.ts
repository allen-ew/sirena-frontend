import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { GraphicSectionComponent } from './graphic-section/graphic-section.component';
import { NavSideBarComponent } from './nav-side-bar/nav-side-bar.component';



@NgModule({
  declarations: [
    CardsComponent,
    GraphicSectionComponent,
    NavSideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:
  [
    CardsComponent,
    GraphicSectionComponent,
    NavSideBarComponent
  ]
})
export class ComponentsModule { }

import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { TodoComponent } from './todo.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent, ItemListComponent, ItemComponent, FooterComponent, InputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodoComponent],
})
export class TodoModule {}

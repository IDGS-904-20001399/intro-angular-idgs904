import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OperasbasComponent } from './operasbas.component';



@NgModule({
  declarations: [
    OperasbasComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgIf,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    OperasbasComponent
  ]
})
export class OperasbasModule { }

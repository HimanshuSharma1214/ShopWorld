import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [],
  imports: [
   CommonModule,
   MatIconModule,
   MatMenuModule,
   MatSnackBarModule
  ],
  exports:[
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}
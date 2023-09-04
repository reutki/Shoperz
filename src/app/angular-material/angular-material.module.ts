import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const components = [
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatTabsModule,
  MatPaginatorModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatTooltipModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatSliderModule,
  MatProgressBarModule,
  MatDialogModule,
  MatMenuModule,
  MatDividerModule,
  MatAutocompleteModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...components
  ],
  exports: [...components],
})
export class AngularMaterialModule {}


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FoodDetailComponent } from './food-detail/food-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodDetailComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

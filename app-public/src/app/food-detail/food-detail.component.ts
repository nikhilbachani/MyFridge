import { Component, Input } from '@angular/core';
import { FoodItem } from '../food-item';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent {

  @Input()
  foodItem: FoodItem;
	
  @Input()
  createHandler: Function;
  
  @Input()
  updateHandler: Function;
  
  @Input()
  deleteHandler: Function;

  constructor(private dataService: AppDataService) { }
	
  createFoodItem(foodItem: FoodItem) {
	  this.dataService.createFoodItem(foodItem)
	  	.then((newFoodItem: FoodItem) => {
		  this.createHandler(newFoodItem);
	  });
  }
  
  updateFoodItem(foodItem: FoodItem): void {
	  this.dataService.updateFoodItem(foodItem)
	  	.then((updatedFoodItem: FoodItem) => {
		  this.updateHandler(updatedFoodItem);
	  });
  }
  
  deleteFoodItem(foodItemId: String): void {
	  this.dataService.deleteFoodItem(foodItemId)
	  	.then((delFoodItemId: String) => {
		  this.deleteHandler(delFoodItemId);
	  });
  }
  
}

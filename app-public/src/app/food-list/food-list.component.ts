import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food-item';
import { AppDataService } from '../app-data.service';
import { FoodDetailComponent } from '../food-detail/food-detail.component';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
  providers: [AppDataService]
})
export class FoodListComponent implements OnInit {
  foodItems: FoodItem[]
  selectedFoodItem: FoodItem
  constructor(private dataService: AppDataService) { }

  ngOnInit() {
	  this.dataService
		.getFoodItems()
		.then((foodItems:FoodItem[]) => 
		{
		    if(foodItems != null) {
				this.foodItems = foodItems.map((foodItem) =>
				{
					foodItem.date = this.dateFormat(foodItem.date);
		  			foodItem.expiry = this.dateFormat(foodItem.expiry);;
					return foodItem;
				});
			}
		});
  }

  private getIndexOfFoodItem = (foodItemId: String) => {
	  return this.foodItems.findIndex((foodItem) => {
		  return foodItem._id === foodItemId
	  });
  }

  selectFoodItem(foodItem: FoodItem) {
	  this.selectedFoodItem = foodItem;
  }
	
  createNewFoodItem() {
	  var foodItem: FoodItem = {
		  name: '',
		  date: '',
		  expiry: '',
		  left_overs: false,
		  quantity: 1
	  };
	  this.selectFoodItem(foodItem);
  }
	
  deleteFoodItem = (foodItemId: String) => {
	  if(confirm("Do you really wish to delete?")) {
		  	var delId = this.getIndexOfFoodItem(foodItemId);
			if(delId !== -1) {
			  if(this.foodItems[delId].quantity > 1) {
				this.foodItems[delId].quantity--;
				alert(this.foodItems[delId].name + "'s quantity has been reduced to " + this.foodItems[delId].quantity);
			  }
			  else {
				this.foodItems.splice(delId, 1);
				this.selectFoodItem(null);
				alert("Deleted successfully!");
			  }
		  }
	  }
	  return this.foodItems;
  }
	
  addFoodItem = (foodItem: FoodItem) => {
	  foodItem.date = this.dateFormat(foodItem.date);
	  foodItem.expiry = this.dateFormat(foodItem.expiry);
	  this.foodItems.push(foodItem);
	  this.selectFoodItem(foodItem);
	  alert("New Food Item: " + foodItem.name + " created");
	  return this.foodItems;
  }
	
  updateFoodItem = (foodItem: FoodItem) => {
	  if(confirm("Do you really wish to update?")) {
		  var upId = this.getIndexOfFoodItem(foodItem._id);
		  if(upId !== -1) {
			  foodItem.date = this.dateFormat(foodItem.date);
			  foodItem.expiry = this.dateFormat(foodItem.expiry);
			  this.foodItems[upId] = foodItem;
			  this.selectFoodItem(foodItem);
			  alert("Update successful!");
		  }
	  }
	  return this.foodItems;
  }
	
  dateFormat = (stringDate: string) => {
	  var foodDate = new Date(stringDate);
	  var dateString = foodDate.getFullYear() + '-' + (foodDate.getMonth()+1) + '-' + foodDate.getUTCDate();
	  return dateString;
  }
}

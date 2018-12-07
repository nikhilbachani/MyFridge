import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { FoodItem } from './food-item';
@Injectable()
export class AppDataService {

  private apiUrl = '/api/food';
  constructor(private http: Http) { }

  public getFoodItems(): Promise<void | FoodItem[]> {
	return this.http.get(this.apiUrl)
	.toPromise()
	.then(response => response.json() as FoodItem[])
	.catch(this.handleError);
  }
								 
  public createFoodItem(newFoodItem: FoodItem): Promise<void | FoodItem> {
	return this.http.post(this.apiUrl, newFoodItem)
	.toPromise()
	.then(response => response.json() as FoodItem)
	.catch(this.handleError);
  }

  public deleteFoodItem(delFoodItemId: String): Promise<void | String> {
	return this.http.delete(this.apiUrl + '/' + delFoodItemId)
	.toPromise()
	.then(response => response.json() as String)
	.catch(this.handleError);
  }

  public updateFoodItem(putFoodItem: FoodItem): Promise<void | FoodItem> {
	var putUrl = this.apiUrl + '/' + putFoodItem._id;
	return this.http.put(putUrl, putFoodItem)
	.toPromise()
	.then(response => response.json() as FoodItem)
	.catch(this.handleError);
  }
  
  private handleError(error: any) {
	  let errMsg = (error.message) ? error.message :
	  error.status ? `${error.status} - ${error.statusText}` : 'Server Error';
	  console.error(errMsg);
  }
}

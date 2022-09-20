package com.cl.foodapp.Exception;

public class FoodOrder extends RuntimeException{
String message="Not Available";
	
	@Override
	public String getMessage() {
		return message;
	}

}

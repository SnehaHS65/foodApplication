package com.org.springbootfoodapp.dao;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.org.springbootfoodapp.dto.FoodProduct;
import com.org.springbootfoodapp.repository.FoodProductRepository;



@Repository
public class FoodProductDao {
	
	@Autowired
	FoodProductRepository foodProductRepo;
	
	
	public FoodProduct saveFoodProduct(FoodProduct foodProduct) {
		return foodProductRepo.save(foodProduct);
	}
	
	public Optional<FoodProduct> getFoodProductById(int id){
		return foodProductRepo.findById(id);
		
	}

}

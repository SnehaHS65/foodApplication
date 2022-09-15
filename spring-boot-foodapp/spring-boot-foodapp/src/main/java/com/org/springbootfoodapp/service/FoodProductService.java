package com.org.springbootfoodapp.service;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import com.org.springbootfoodapp.dao.FoodProductDao;
import com.org.springbootfoodapp.dao.MenuDao;
import com.org.springbootfoodapp.dto.FoodProduct;
import com.org.springbootfoodapp.dto.Menu;
import com.org.springbootfoodapp.responseStructure.ResponseStructure;



@Service
public class FoodProductService {
	
	@Autowired
	FoodProductDao foodProductDao;
	@Autowired
	MenuDao menuDao;
	
	
	
	public  ResponseEntity<ResponseStructure<FoodProduct>> saveFoodProduct(FoodProduct foodProduct, int menuId) {
		ResponseStructure<FoodProduct> responseStructure = new ResponseStructure<>();
		Optional<Menu> optional = menuDao.getMenuById(menuId); 
		if(optional.isEmpty()) {
			responseStructure.setStatuscode(HttpStatus.NOT_FOUND.value());
			responseStructure.setMessage("No menu Id found");
			System.out.println("No menu with that id");
		}else {
			foodProduct.setMenu(optional.get());
			responseStructure.setStatuscode(HttpStatus.CREATED.value());;
			responseStructure.setMessage("Food Product Saved");
			responseStructure.setData(foodProductDao.saveFoodProduct(foodProduct));
		}		
		return new ResponseEntity<ResponseStructure<FoodProduct>>(responseStructure, HttpStatus.OK);
	}

}

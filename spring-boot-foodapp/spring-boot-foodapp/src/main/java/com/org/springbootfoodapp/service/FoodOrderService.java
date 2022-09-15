package com.org.springbootfoodapp.service;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.org.springbootfoodapp.dao.FoodOrderDao;
import com.org.springbootfoodapp.dao.UserDao;
import com.org.springbootfoodapp.dto.FoodOrder;
import com.org.springbootfoodapp.dto.User;
import com.org.springbootfoodapp.responseStructure.ResponseStructure;



@Service
public class FoodOrderService {
	
	@Autowired
	FoodOrderDao foodOrderDao;
	
	
	@Autowired
	UserDao userDao;
	
	
	public ResponseEntity<ResponseStructure<FoodOrder>> saveFoodOrder(FoodOrder foodOrder, int id){
		Optional<User> optional = userDao.getUserById(id);
		if(optional.isEmpty()) {
			System.out.println("ID NOT FOUND");
		}
		else {
			foodOrder.setUser(optional.get());
		}
		
		ResponseStructure<FoodOrder> responseStructure = new ResponseStructure<>();
		responseStructure.setStatuscode(HttpStatus.CREATED.value());;
		responseStructure.setMessage("Food Order Placed");
		responseStructure.setData(foodOrderDao.saveFoodOrder(foodOrder));
		
		return new ResponseEntity<ResponseStructure<FoodOrder>>(responseStructure, HttpStatus.OK);
	}
}

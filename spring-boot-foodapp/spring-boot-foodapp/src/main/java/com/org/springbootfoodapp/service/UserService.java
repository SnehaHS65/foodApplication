package com.org.springbootfoodapp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.org.springbootfoodapp.dao.UserDao;
import com.org.springbootfoodapp.dto.User;
import com.org.springbootfoodapp.responseStructure.ResponseStructure;



@Service
public class UserService {
	
	@Autowired
	UserDao userDao;
	
	public ResponseEntity<ResponseStructure<User>> saveUser(User user){
		ResponseStructure<User> responseStructure = new ResponseStructure<>();
		responseStructure.setStatuscode(HttpStatus.CREATED.value());
		responseStructure.setMessage(user.getName() + " saved successfully");
		responseStructure.setData(userDao.saveUser(user));
		
		return new ResponseEntity<ResponseStructure<User>>(responseStructure, HttpStatus.OK);
	}
	
	public ResponseEntity<ResponseStructure<User>> getUserById(int id){
		ResponseStructure<User> responseStructure = new ResponseStructure<>();
		Optional<User> optional = userDao.getUserById(id);
		if(optional.isEmpty()) {
			System.out.println("ID NOT FOUND");
		}
		else {
			responseStructure.setStatuscode(HttpStatus.OK.value());
			responseStructure.setMessage("User Found");
			responseStructure.setData(optional.get());
		}
		
		return new ResponseEntity<ResponseStructure<User>>(responseStructure, HttpStatus.OK);
	}

}

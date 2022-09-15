package com.org.springbootfoodapp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.org.springbootfoodapp.dao.MenuDao;
import com.org.springbootfoodapp.dao.UserDao;
import com.org.springbootfoodapp.dto.Menu;
import com.org.springbootfoodapp.dto.User;
import com.org.springbootfoodapp.responseStructure.ResponseStructure;



@Service
public class MenuService {
	
	@Autowired
	MenuDao menuDao;
	
	@Autowired
	UserDao userDao;
	
		public ResponseEntity<ResponseStructure<Menu>> saveMenu(Menu menu, int id){
		
			Optional<User> optional = userDao.getUserById(id);
			if(optional.isEmpty()) {
				System.out.println("User Not Found");
			}
			else {
				menu.setUser(optional.get());
			}
			ResponseStructure<Menu> responseStructure = new ResponseStructure<>();
			responseStructure.setStatuscode(HttpStatus.CREATED.value());;
			responseStructure.setMessage("Menu saved");
			responseStructure.setData(menuDao.saveMenu(menu));
			return new ResponseEntity<ResponseStructure<Menu>> (responseStructure, HttpStatus.OK) ;
		
	}


}

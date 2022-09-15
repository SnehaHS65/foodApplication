package com.org.springbootfoodapp.dao;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.org.springbootfoodapp.dto.Menu;
import com.org.springbootfoodapp.repository.MenuRepository;



@Repository
public class MenuDao {
	
	@Autowired
	MenuRepository menuRepository;
	
	public Menu saveMenu(Menu menu) {
		return menuRepository.save(menu);
	}
	public Optional<Menu> getMenuById(int id) {
		return menuRepository.findById(id);
	}

}

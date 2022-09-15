package com.org.springbootfoodapp.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.org.springbootfoodapp.dto.Menu;

public interface MenuRepository extends JpaRepository<Menu,Integer>{
	

}

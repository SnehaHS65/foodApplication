package com.org.springbootfoodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.org.springbootfoodapp.dto.Item;

public interface ItemRepository extends JpaRepository<Item,Integer>{

}

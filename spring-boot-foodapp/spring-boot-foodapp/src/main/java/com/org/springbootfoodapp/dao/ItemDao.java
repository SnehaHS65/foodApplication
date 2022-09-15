package com.org.springbootfoodapp.dao;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.org.springbootfoodapp.dto.Item;
import com.org.springbootfoodapp.repository.ItemRepository;



@Repository
public class ItemDao {
	
	@Autowired
    ItemRepository itemRepo;
    
    public Item saveItem(Item item) {
        return itemRepo.save(item);
    }
    
    public Optional<Item> getItemById(int id){
        return itemRepo.findById(id);
}



}

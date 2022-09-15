package com.org.springbootfoodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.org.springbootfoodapp.dto.FoodOrder;

public interface FoodOrderRepository extends JpaRepository<FoodOrder,Integer> {

}

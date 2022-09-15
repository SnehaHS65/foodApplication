package com.org.springbootfoodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.org.springbootfoodapp.dto.FoodProduct;

public interface FoodProductRepository extends JpaRepository<FoodProduct,Integer> {

}

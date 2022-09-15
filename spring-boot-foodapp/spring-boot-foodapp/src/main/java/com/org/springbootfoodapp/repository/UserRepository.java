package com.org.springbootfoodapp.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.org.springbootfoodapp.dto.User;



public interface UserRepository extends JpaRepository<User, Integer>{

}

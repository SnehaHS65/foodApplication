package com.org.springbootfoodapp.dao;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.org.springbootfoodapp.dto.User;
import com.org.springbootfoodapp.repository.UserRepository;



@Repository
public class UserDao {
	
	@Autowired
	UserRepository userRepo;
	
	public User saveUser(User user) {
		return userRepo.save(user);
	}
	
	public Optional<User> getUserById(int id) {
		return userRepo.findById(id);
	}
	

}

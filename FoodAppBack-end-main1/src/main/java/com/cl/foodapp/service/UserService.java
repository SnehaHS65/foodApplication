package com.cl.foodapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cl.foodapp.Exception.IdNotFound;
import com.cl.foodapp.dao.UserDao;
import com.cl.foodapp.entity.User;
import com.cl.foodapp.responseStructure.ResponseStructure;

@Service
public class UserService {

	@Autowired
	UserDao userDao;
	public ResponseEntity<ResponseStructure<User>> saveuser(User user) {
		ResponseStructure<User> responseStructure = new ResponseStructure<>();
		responseStructure.setMessage("admin has been Saved");
		responseStructure.setStatuscode(HttpStatus.CREATED.value());
		responseStructure.setT(userDao.saveuser(user));
		return new ResponseEntity<ResponseStructure<User>>(responseStructure, HttpStatus.CREATED);}

	public ResponseEntity<ResponseStructure<User>> updateuser(User user, int id) {
		Optional<User> optional = userDao.getby(id);
		ResponseStructure<User> responseStructure = new ResponseStructure<>();
		if (optional.isEmpty()) {
			responseStructure.setMessage("Id not found");
			responseStructure.setStatuscode(HttpStatus.NOT_FOUND.value());
			responseStructure.setT(null);
			return new ResponseEntity<ResponseStructure<User>>(responseStructure, HttpStatus.NOT_FOUND);}
		else {
			responseStructure.setMessage("admin got updated");
			responseStructure.setStatuscode(HttpStatus.OK.value());
			responseStructure.setT(userDao.updateuser(user, id));
			return new ResponseEntity<ResponseStructure<User>>(responseStructure, HttpStatus.OK);}}
	public ResponseEntity<ResponseStructure<User>> getby(int id) {
		Optional<User> optional = userDao.getby(id);
		ResponseStructure<User> responseStructure = new ResponseStructure<>();
		if (optional.isEmpty()) {
			responseStructure.setMessage("Id not found");
			responseStructure.setStatuscode(HttpStatus.NOT_FOUND.value());
			return new ResponseEntity<ResponseStructure<User>>(responseStructure, HttpStatus.NOT_FOUND);}
		else {
			responseStructure.setMessage("admin has been found");
			responseStructure.setStatuscode(HttpStatus.OK.value());
			responseStructure.setT(optional.get());
			return new ResponseEntity<ResponseStructure<User>>(responseStructure, HttpStatus.OK);}}
	public ResponseEntity<ResponseStructure<User>> delete(int id) {
		Optional<User> optional = userDao.getby(id);
		ResponseStructure<User> responseStructure = new ResponseStructure<>();
		if (optional.isEmpty()) {
			responseStructure.setMessage("Id not found");
			responseStructure.setStatuscode(HttpStatus.NOT_FOUND.value());
			return new ResponseEntity<ResponseStructure<User>>(responseStructure, HttpStatus.NOT_FOUND);}
		else {
			responseStructure.setMessage("admin has been deleted");
			responseStructure.setStatuscode(HttpStatus.OK.value());
			responseStructure.setT(userDao.delete(id));
			return new ResponseEntity<ResponseStructure<User>>(responseStructure, HttpStatus.OK);}}
	
	public ResponseEntity<ResponseStructure<List<User>>> getall(){
		ResponseStructure<List<User>> responseStructure = new ResponseStructure<List<User>>();
		responseStructure.setMessage("all admins has been found");
		responseStructure.setStatuscode(HttpStatus.OK.value());
		responseStructure.setT(userDao.getall());
	    return new  ResponseEntity<ResponseStructure<List<User>>>(responseStructure,HttpStatus.OK);}
    public String getRole(int id) {
	    Optional<User> optional=userDao.getby(id);
	    if(optional.isEmpty()) {
		   throw new IdNotFound();
	    }
	    else {
		   return optional.get().getRole();
	    }}


    public User findbyEmailnPassword(User user) throws Exception {
    	return userDao.findbyEmailnPassword(user);
    	}
    }



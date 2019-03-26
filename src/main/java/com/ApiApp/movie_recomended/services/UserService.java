package com.ApiApp.movie_recomended.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ApiApp.movie_recomended.models.User;
import com.ApiApp.movie_recomended.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	public void addUser(User user) {
		userRepository.save(user);
	}
}

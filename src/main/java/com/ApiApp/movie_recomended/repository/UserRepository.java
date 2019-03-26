package com.ApiApp.movie_recomended.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ApiApp.movie_recomended.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}

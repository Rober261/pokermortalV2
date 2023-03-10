package com.pokergame.poker.repository;

import com.pokergame.poker.model.*;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Integer> {
  
}

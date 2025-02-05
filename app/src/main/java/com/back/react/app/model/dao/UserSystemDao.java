package com.back.react.app.model.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.back.react.app.model.entity.UserSystem;

@Repository
public interface UserSystemDao extends CrudRepository<UserSystem, Long>{}

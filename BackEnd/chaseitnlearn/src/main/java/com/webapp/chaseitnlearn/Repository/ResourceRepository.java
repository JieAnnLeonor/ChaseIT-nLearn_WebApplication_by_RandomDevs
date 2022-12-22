package com.webapp.chaseitnlearn.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webapp.chaseitnlearn.Entity.ResourceEntity;


@Repository
public interface ResourceRepository extends JpaRepository<ResourceEntity, Integer>{
	
}

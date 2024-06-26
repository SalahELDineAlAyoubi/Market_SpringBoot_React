package com.market.app.repositories;

import com.market.app.dataModels.Region;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RegionRepository extends JpaRepository<Region, Integer> {
     Optional<Region>  findByName(String name);

}

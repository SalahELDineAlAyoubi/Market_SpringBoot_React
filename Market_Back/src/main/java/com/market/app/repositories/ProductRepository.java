package com.market.app.repositories;


import com.market.app.dataModels.Product;
import com.market.app.dataModels.Region;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository  extends JpaRepository<Product, Integer> {
    Optional<Product> findByName(String name);

}

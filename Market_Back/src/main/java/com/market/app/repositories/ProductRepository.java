package com.market.app.repositories;


import com.market.app.dataModels.Product;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository  extends JpaRepository<Product, Integer> {
    Optional<Product> findByName(String name);
List<Product> findAllByCategoryId(Integer categoryId, Sort updatedAt);
}

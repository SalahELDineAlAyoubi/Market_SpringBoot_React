package com.market.app.services;

import com.market.app.Mappers.CategoryMapper;
import com.market.app.Mappers.ProductMapper;
import com.market.app.dataModels.Category;
import com.market.app.dataModels.Product;
import com.market.app.dto.arg.CategoryDto;
import com.market.app.exceptions.AlreadyExistException;
import com.market.app.repositories.CategoryRepository;
import com.market.app.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service

public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    @Qualifier("categoryMapperImp")
    private CategoryMapper categoryMapper;


public CategoryDto addCategory(String name){
    Optional<Category> existingCategory= categoryRepository.findByName(name);

    if (existingCategory.isPresent()) {
        throw new AlreadyExistException("Category already exist with this name "+ name);
    }

    Category entity = new Category() ;
    entity.setName(name);
    categoryRepository.save(entity);


    return  categoryMapper.toDto(entity);

}


}

package com.market.app.Mappers.imp;

import com.market.app.Mappers.CategoryMapper;
import com.market.app.dataModels.Category;
import com.market.app.dto.arg.CategoryDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CategoryMapperImp implements CategoryMapper {

    @Override
    public CategoryDto toDto(Category entity) {
        if ( entity == null ) {
            return null;
        }

        CategoryDto categoryDto = new CategoryDto();
        categoryDto.setId(entity.getId());
        categoryDto.setName(entity.getName());

        return categoryDto;
    }

    @Override
    public Category toEntity(CategoryDto dto) {
        if ( dto == null ) {
            return null;
        }

        Category category = new Category();

        category.setName(dto.getName());
        category.setId(dto.getId());
         return category;
    }

    @Override
    public List<CategoryDto> toDTOs(List<Category> entities) {
        if ( entities == null ) {
            return null;
        }

        List<CategoryDto> list = new ArrayList<CategoryDto>( entities.size() );
        for ( Category category : entities ) {
            list.add( toDto( category ) );
        }

        return list;
    }
}

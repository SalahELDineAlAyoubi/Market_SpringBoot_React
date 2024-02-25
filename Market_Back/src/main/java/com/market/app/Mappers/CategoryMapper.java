package com.market.app.Mappers;

   import com.market.app.dataModels.Category;
  import com.market.app.dto.arg.CategoryDto;
import org.mapstruct.Mapper;

import java.util.List;

public interface CategoryMapper {

    CategoryDto toDto(Category entity) ;
    Category toEntity(CategoryDto dto);

  List<CategoryDto> toDTOs(List<Category> entities);

 }

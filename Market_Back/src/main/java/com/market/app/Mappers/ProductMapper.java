package com.market.app.Mappers;

import com.market.app.dataModels.Product;
import com.market.app.dto.Request.ProductDtoRequest;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")

public interface ProductMapper {
    ProductDtoRequest toDTO(Product entity);
    Product toEntity(ProductDtoRequest dto);
    List<ProductDtoRequest> toDTOs(List<Product> entities);

}




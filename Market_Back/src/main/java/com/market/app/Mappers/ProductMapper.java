package com.market.app.Mappers;

import com.market.app.dataModels.Product;
import com.market.app.dto.Request.ProductDtoRequest;
import com.market.app.dto.Response.ProductDtoResponse;
import org.mapstruct.Mapper;

import java.util.List;


public interface ProductMapper {
    ProductDtoRequest toDTO(Product entity);
    Product toEntity(ProductDtoRequest dto);
    ProductDtoResponse toResDto (Product entity);
    List<ProductDtoResponse> toDTOs(List<Product> entities);

}




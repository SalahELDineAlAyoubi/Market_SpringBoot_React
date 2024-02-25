package com.market.app.Mappers.imp;

import com.market.app.Mappers.ProductMapper;
import com.market.app.dataModels.Product;
import com.market.app.dto.Request.ProductDtoRequest;
import com.market.app.dto.Response.ProductDtoResponse;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component

public class ProductMapperImp  implements ProductMapper {
    @Override
    public ProductDtoRequest toDTO(Product entity) {
        if ( entity == null ) {
            return null;
        }

        ProductDtoRequest productDtoRequest = new ProductDtoRequest();
        productDtoRequest.setName(entity.getName());
        productDtoRequest.setPrice(entity.getPrice());
        productDtoRequest.setQuantity(entity.getQuantity());
        productDtoRequest.setImageUrl(entity.getImageUrl());
        return productDtoRequest;
    }

    @Override
    public Product toEntity(ProductDtoRequest dto) {
        if ( dto == null ) {
            return null;
        }

        String name = dto.getName();
        double price =  dto.getPrice();
        int quantity =  dto.getQuantity();
        String imageUrl = dto.getImageUrl();

        Product product = new Product( name, price, quantity, imageUrl );

        return product;
    }

    @Override
    public ProductDtoResponse toResDto(Product entity) {
        if ( entity == null ) {
            return null;
        }

        ProductDtoResponse productDtoResponse = new ProductDtoResponse();
        productDtoResponse.setId(entity.getId());
        productDtoResponse.setName(entity.getName());
        productDtoResponse.setPrice(entity.getPrice());
        productDtoResponse.setQuantity(entity.getQuantity());
        productDtoResponse.setImageUrl(entity.getImageUrl());
        productDtoResponse.setCreatedAt(entity.getCreatedAt());
        productDtoResponse.setUpdatedAt(entity.getUpdatedAt());
        return productDtoResponse;
    }

    @Override
    public List<ProductDtoResponse> toDTOs(List<Product> entities) {
        if ( entities == null ) {
            return null;
        }

        List<ProductDtoResponse> list = new ArrayList<ProductDtoResponse>( entities.size() );
        for ( Product product : entities ) {
            list.add( toResDto( product ) );
        }

        return list;
    }

}

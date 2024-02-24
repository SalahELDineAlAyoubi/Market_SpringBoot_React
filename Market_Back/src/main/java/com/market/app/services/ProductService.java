package com.market.app.services;

import com.market.app.Mappers.ProductMapper;
import com.market.app.Mappers.RegionMapper;
import com.market.app.dataModels.Product;
import com.market.app.dataModels.Region;
import com.market.app.dto.Request.ProductDtoRequest;
import com.market.app.dto.Response.ProductDtoResponse;
import com.market.app.dto.Response.RegionDtoResponse;
import com.market.app.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Optional;
import java.util.UUID;

@Service

public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ProductMapper productMapper;
    @Value("${upload.dir}")
    private String uploadDir;




    public ProductDtoResponse addProduct(ProductDtoRequest request) {

        var productDtoResponse =new ProductDtoResponse();
        Optional<Product> existingProduct = productRepository.findByName(request.getName());

        if (existingProduct.isPresent()) {
            productDtoResponse.isSuccess=false;
            productDtoResponse.message="Product Already Exist";
            return productDtoResponse ;
        }
       Product entity =  this.productMapper.toEntity(request);
         productRepository.save(entity);
        productDtoResponse.isSuccess=true;
        productDtoResponse.message="Product Added successfully";

        return  productDtoResponse;
    }









    //Upload image
    public String uploadImage(MultipartFile file) {
        try {
            String originalFilename = file.getOriginalFilename();
            String extension = originalFilename.substring(originalFilename.lastIndexOf('.'));
            String randomFilename = UUID.randomUUID().toString() + extension;

            Path filePath = Paths.get(uploadDir, randomFilename);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            return filePath.toString();
        } catch (Exception e) {
            throw new RuntimeException("Failed to store file", e);
        }
    }
}



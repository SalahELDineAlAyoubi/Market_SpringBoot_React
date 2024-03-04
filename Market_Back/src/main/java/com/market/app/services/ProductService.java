package com.market.app.services;

import com.market.app.Mappers.ProductMapper;
import com.market.app.Mappers.RegionMapper;
import com.market.app.dataModels.Category;
import com.market.app.dataModels.Product;
import com.market.app.dataModels.Region;
import com.market.app.dto.Request.ProductDtoRequest;
import com.market.app.dto.Response.ProductDtoResponse;
import com.market.app.dto.Response.RegionDtoResponse;
import com.market.app.exceptions.AlreadyExistException;
import com.market.app.exceptions.NotFoundException;
import com.market.app.repositories.CategoryRepository;
import com.market.app.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service

public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    @Qualifier("productMapperImp")

    private ProductMapper productMapper;
    @Value("${upload.dir}")
    private String uploadDir;




    public ProductDtoResponse addProduct(ProductDtoRequest request, MultipartFile imageFile ,Integer categoryId) {

         Optional<Product> existingProduct = productRepository.findByName(request.getName());

        if (existingProduct.isPresent()) {
            throw new AlreadyExistException("Product already exist with this name - "+ request.getName());
        }
        Optional<Category> categoryOptional = categoryRepository.findById(categoryId);
        if (categoryOptional.isEmpty()) {
            throw new NotFoundException("Category Not Found - " + categoryId);
        }

        String imageUrl = uploadImage(imageFile);
        request.setImageUrl(imageUrl);

            Category category = categoryOptional.get();

        Product entity =  this.productMapper.toEntity(request);
        entity.setCategory(category);
         productRepository.save(entity);


        return  productMapper.toResDto(entity);
    }


//   public List<ProductDtoResponse> getAllProducts(){
//       List<Product> all = this.productRepository.findAll();
//       if(all.isEmpty()){
//           return null ;
//       }
//       return this.productMapper.toDTOs(all);
//
//   }

   public List<ProductDtoResponse> getAllProducts(){
       List<Product> all = this.productRepository.findAllByIsAvailableTrue();
       if(all.isEmpty()){
           return null ;
       }
       return this.productMapper.toDTOs(all);

   }

 public List<ProductDtoResponse> getProductsByCategory(Integer categoryId){
       List<Product> all = this.productRepository.findAllByCategoryIdAndIsAvailableTrue(categoryId, Sort.by(Sort.Direction.DESC, "updatedAt"));
       if(all.isEmpty()){
           return null ;
       }
       return this.productMapper.toDTOs(all);

   }
 public List<ProductDtoResponse> getProductsByCategoryContains(Integer categoryId,String nameProduct){
     List<ProductDtoResponse> all = getProductsByCategory(categoryId);
     if (all == null) {
         return null;
     }
     return all.stream()
             .filter(product -> product.getName().toLowerCase().contains(nameProduct.toLowerCase())   )
             .collect(Collectors.toList());

   }

public  ProductDtoResponse  getProductById(Integer productId) {
    Optional<Product> reg =  productRepository.findById(productId);

    if(reg.isPresent()){
        return  productMapper.toResDto(reg.get())  ;
    }
    else {
        throw new NotFoundException("Product not found - "+ productId);
    }

}


    public  ProductDtoResponse  updateProduct(  Integer categoryId,Integer productId  ,ProductDtoRequest request ,MultipartFile imageFile) {


        Optional<Product>  entityOptional = productRepository.findById(productId);
        if (entityOptional.isEmpty()) {
            throw new NotFoundException("Product Not Found - " + productId);
        }

        Optional<Category> categoryOptional = categoryRepository.findById(categoryId);
        if (categoryOptional.isEmpty()) {
            throw new NotFoundException("Category Not Found - " + categoryId);
        }
        Product entity = entityOptional.get();

        Category category = categoryOptional.get();

        if( imageFile!=null ){
            String imageUrl = uploadImage(imageFile);
            request.setImageUrl(imageUrl);
            entity.setImageUrl(request.getImageUrl());
        }
        entity.setCategory(category);
        entity.setName(request.getName());
        entity.setQuantity(request.getQuantity());
        entity.setPrice(request.getPrice());

        return productMapper.toResDto(productRepository.save(entity)) ;

    }





    //Upload image
    public String uploadImage(MultipartFile file) {
        try {
            String originalFilename = file.getOriginalFilename();
            String extension = originalFilename.substring(originalFilename.lastIndexOf('.'));
            String randomFilename = UUID.randomUUID().toString() + extension;

            Path filePath = Paths.get(uploadDir, randomFilename);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            return randomFilename.toString();
        } catch (Exception e) {
            throw new RuntimeException("Failed to store file", e);
        }
    }


    public void setAvailable() {

        List<Product> allProducts = productRepository.findAll();
        allProducts.forEach(product -> product.setAvailable(true));
        productRepository.saveAll(allProducts);
    }
    @Transactional
    public int deleteProduct(Integer productId) {
        Optional<Product> productOptional = productRepository.findById(productId);

        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            product.setAvailable(false);
            productRepository.save(product);
            return product.getId();
        } else {
            throw new NotFoundException("Product not found - " + productId);
        }
    }



}



package com.market.app.controllers;

import com.market.app.dto.Request.ProductDtoRequest;
import com.market.app.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;



    @PostMapping("add-product")
    public  ResponseEntity<?>  addRegion(@RequestBody ProductDtoRequest request ){

        if(request.getName().isEmpty() || request.getImageUrl().isEmpty()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Info");
        }


        var result =  productService.addProduct(request);
        if(result.isSuccess) {
            return ResponseEntity.ok(result.message);
        }
        else   return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result.message);


    }








    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
        String imageUrl = productService.uploadImage(file);
        return ResponseEntity.ok(imageUrl);
    }




}

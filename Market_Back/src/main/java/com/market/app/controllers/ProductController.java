package com.market.app.controllers;

import com.market.app.dto.Request.ProductDtoRequest;
import com.market.app.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")

public class ProductController {
    @Autowired
    private ProductService productService;


   // @PreAuthorize("hasRole('ADMIN')")

    @PostMapping("add/{categoryId}")
    public  ResponseEntity<?>  AddProduct(@ModelAttribute ProductDtoRequest request ,
                                         @RequestParam("image") MultipartFile imageFile,
                                          @PathVariable Integer categoryId)
    {

        if(request.getName().isEmpty()  ){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Info");
        }


        var result =  productService.addProduct(request,imageFile,categoryId);
            return ResponseEntity.ok(result);
    }

    @GetMapping("")
    public  ResponseEntity<?>  GetAllProducts()
    {

        var result =  productService.getAllProducts();
        if(result != null) {
            return ResponseEntity.ok(result);
        }
        else   return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No products");


    }

    @GetMapping("/available")
    public ResponseEntity<?> setavailable() {
        productService.setAvailable();
        return ResponseEntity.ok("done");
    }
    @GetMapping("get-all/{categoryId}")
    public  ResponseEntity<?>  GetProductsByCategory(@PathVariable Integer categoryId)
    {

        var result =  productService.getProductsByCategory(categoryId);
        if(result != null) {
            return ResponseEntity.ok(result);
        }
        else   return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No products");


    }

    @GetMapping("get-all/{categoryId}/{nameProduct}")
    public  ResponseEntity<?>  GetProductsByCategoryContains(@PathVariable Integer categoryId,@PathVariable String nameProduct)
    {

        var result =  productService.getProductsByCategoryContains(categoryId,nameProduct);
        if(result != null) {
            return ResponseEntity.ok(result);
        }
        else   return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No products");


    }


    @GetMapping("{productId}")
    public ResponseEntity<?>  getProduct(@PathVariable Integer productId) {
        var result= productService.getProductById(productId);
         return ResponseEntity.ok(result);
    }

    @PutMapping("{categoryId}/{productId}")
    public ResponseEntity<?> UpdateProduct(@PathVariable Integer categoryId,
                                           @PathVariable Integer productId  ,
                                            @ModelAttribute ProductDtoRequest request ,
                                           @RequestParam(value = "image", required = false) MultipartFile imageFile
                                            ) {

        var result= productService.updateProduct(categoryId, productId  ,  request , imageFile);

        return ResponseEntity.ok(result);
    }





    @PostMapping("/upload")
    public ResponseEntity<String> UploadImage(@RequestParam("file") MultipartFile file) {
        String imageUrl = productService.uploadImage(file);
        return ResponseEntity.ok(imageUrl);
    }


    @DeleteMapping("{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer productId ) {
        int id  =productService.deleteProduct(productId);
        return ResponseEntity.ok(id);
    }



}

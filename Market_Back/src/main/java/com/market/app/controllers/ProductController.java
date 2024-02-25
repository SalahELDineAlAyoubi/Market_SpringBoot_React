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



    @PostMapping("add")
    public  ResponseEntity<?>  AddProduct(@ModelAttribute ProductDtoRequest request ,
                                         @RequestParam("image") MultipartFile imageFile)
    {

        if(request.getName().isEmpty()  ){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Info");
        }


        var result =  productService.addProduct(request,imageFile);
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

    @GetMapping("{productId}")
    public ResponseEntity<?>  getProduct(@PathVariable Integer productId) {
        var result= productService.getProductById(productId);
         return ResponseEntity.ok(result);
    }
/*
    @PutMapping("")
    public ResponseEntity<?> UpdateProduct(@RequestBody ProductDtoRequest request ) {

        var result= productService.updateProduct(request);

        return ResponseEntity.ok(result);
    }
*/




    @PostMapping("/upload")
    public ResponseEntity<String> UploadImage(@RequestParam("file") MultipartFile file) {
        String imageUrl = productService.uploadImage(file);
        return ResponseEntity.ok(imageUrl);
    }




//Tmp method
    @DeleteMapping("delete-all")
    public  ResponseEntity<?>  deleteAllProducts()
    {
        var result =  productService.deleteAllproducts();
        return ResponseEntity.ok(result);

    }

}

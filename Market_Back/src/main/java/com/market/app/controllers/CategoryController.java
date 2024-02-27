package com.market.app.controllers;


 import com.market.app.dataModels.Category;
 import com.market.app.dataModels.Region;
 import com.market.app.services.CategoryService;
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

 import java.util.List;

@RestController
@RequestMapping("/categories")
@CrossOrigin("*")

public class CategoryController {
    @Autowired
    private CategoryService categoryService;

 @PostMapping("{categoryName}")
    public ResponseEntity<?> AddCategory(@PathVariable String categoryName )
    {

        if(categoryName.isEmpty()  ){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Info");
        }


        var result =  categoryService.addCategory(categoryName);
        return ResponseEntity.ok(result);
    }


    @GetMapping("{categoryId}")
    public ResponseEntity<Category>  getCategory(@PathVariable Integer categoryId) {
        var result= categoryService.getCategoryById(categoryId);
        return ResponseEntity.ok(result);
    }

}

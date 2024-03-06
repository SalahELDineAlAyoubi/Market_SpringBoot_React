package com.market.app.controllers;

import com.market.app.dataModels.Category;
import com.market.app.dto.arg.CategoryDto;
import com.market.app.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/thymeleaf")
@CrossOrigin("*")

public class Thymeleaf {
    @Autowired
    private CategoryService categoryService;
    @GetMapping("/get-all")
    public String displayAllProducts(Model model) {
        List<CategoryDto> categories = categoryService.getAllCategories();
        model.addAttribute("categories", categories);
        return "allCategories";
    }

    @PostMapping("/edit/{id}")
    public String editProduct(Model model, @PathVariable Integer id) {
       CategoryDto  category = categoryService.getCategoryById(id);

        model.addAttribute("category", category);
        return "editCategory";
    }

    @PostMapping("/update")
    public String updateProduct(@ModelAttribute("category") CategoryDto category ) {

        categoryService.updateCategory(category);
        return "redirect:/thymeleaf/get-all";

    }

    @GetMapping("/add")
    public String goToAdd(Model model) {
        model.addAttribute("category", new CategoryDto());
        return "addCategory";
    }

    @PostMapping("/addCategory")
    public String addCategory(@ModelAttribute("category") CategoryDto category) {
        categoryService.addCategory(category.getName());

        return "redirect:/thymeleaf/get-all";
    }

}

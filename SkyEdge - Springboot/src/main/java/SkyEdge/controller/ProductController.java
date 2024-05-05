package SkyEdge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import SkyEdge.model.Product;
import SkyEdge.service.ProductService;

@Controller
public class ProductController {
    @Autowired
    private ProductService productService;
    
    @GetMapping("/admin/product")
    public String product(Model model) throws NotFoundException {
        Product product = productService.findByProductId((long) 0);
        // List<Product> products = productService.getAllProducts();
        model.addAttribute("product", product);
        return "admin/product/admin-product"; 
    }
}

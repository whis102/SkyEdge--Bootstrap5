package SkyEdge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import SkyEdge.model.Product;
import SkyEdge.repository.ProductRepository;
import SkyEdge.service.ProductService;

@Controller
public class ProductController {
    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/admin/product/add")
    public String addNewProduct(@ModelAttribute Product product) throws
    NotFoundException {
    productRepository.save(product);
    System.out.println(product.getName());
    System.out.println("saved");
    return "redirect:/admin/product";
    }

    @GetMapping("/admin/product/add")
    public String addProduct(Model model) {
    Product product = new Product();
    model.addAttribute("product", product);
    return "admin/product/admin-addproduct";
    }

    @GetMapping("/admin/product")
    public String listProducts(Model model) {
        
    List<Product> products =productService.getAllProducts();
    model.addAttribute("products", products);
    return "admin/product/admin-product";
    }

    @GetMapping("/admin/product/search")
    public String searchProduct(@RequestParam("query") String query, Model model) {
    List<Product> products =productRepository.findByNameContainingIgnoreCase(query);
    System.out.println(products);
    model.addAttribute("products", products);
    return "admin/product/admin-product";
    }

    @GetMapping("/admin/product/delete/{id}")
    public String deleteProduct(@PathVariable(value = "id") Long id) {
        if (productRepository.findById(id).isPresent()) {
            Product product = productRepository.findById(id).get();
            productRepository.delete(product);
        }
    return "redirect:/admin/product";
    }

    @GetMapping("/admin/product/update/{id}")
    public String updateProduct(@PathVariable(value = "id") Long id, Model model) {
            Product product = productRepository.findById(id).get();
            model.addAttribute(product);
    return "admin/product/admin-updateproduct";
    }

    @PostMapping("/admin/product/save")
    public String saveProduct(@ModelAttribute Product product) {
        // Product newProduct = productRepository.findOneById(product.getId());
        // newProduct.setName(product.getName());
        // newProduct.setName(product.getDescription());
        // System.out.println("name: "+product.getName());
        System.out.println(product.getName());
            productRepository.save(product);
    return "redirect:/admin/product";
    }
}

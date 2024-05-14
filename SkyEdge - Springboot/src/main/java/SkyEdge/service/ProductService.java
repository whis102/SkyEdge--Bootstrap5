package SkyEdge.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import SkyEdge.model.Product;
import SkyEdge.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAllByDeleted(false);
    }

    public Product findByProductId(int id) throws NotFoundException {
        return productRepository.findById(id).get();
    }

    public Optional<Product> getProductById(int id) {
        return productRepository.findById(id);
    }

    public Long getProductCount() {
        return productRepository.countProducts();
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }

    public List<Product> getProductsByCategory(String category) {
        return productRepository.findAllByCategoryAndDeleted(category, false);
    }
}

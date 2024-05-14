package SkyEdge.service;

import java.util.List;
import java.util.Optional;

// import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
// import org.springframework.data.domain.Page;
// import org.springframework.data.domain.PageRequest;
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
        return productRepository.findAll();
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

    // public Page<Product> getAll(Integer pageNo){
    //     Pageable pageable = PageRequest.of(pageNo-1, 2);
    //     return this.productRepository.findAll(pageable);
    // }
}

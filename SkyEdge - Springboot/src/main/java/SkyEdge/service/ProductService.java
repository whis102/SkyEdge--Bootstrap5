package SkyEdge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import SkyEdge.model.Product;
import SkyEdge.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product findByProductId(Long id) throws NotFoundException {
        return productRepository.findOneById(id);
    }
}

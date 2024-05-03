package SkyEdge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import SkyEdge.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    Product findOneById(Long id);
}
package SkyEdge.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import SkyEdge.model.Product;
import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Order;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Root;

@Repository
public class ProductDAO {
    @Autowired
    EntityManager em;

    public List<Product> applyFilter(int sortMode,int id, String category) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Product> cq = cb.createQuery(Product.class);
        Root<Product> product = cq.from(Product.class);

        Path<Object> sortColumn = product.get("id"); 

        if (sortMode == 2 || sortMode == 3) {
            sortColumn = product.get("name");
        }

        Order sortOrder = cb.desc(sortColumn);
        if (sortMode == 1 || sortMode == 2) {
            sortOrder = cb.asc(sortColumn);
        }

        List<Predicate> predicates = new ArrayList<>();
        // filtering by gender (0 means not filtered by gender)
        if (category.equals("1")) {
            predicates.add((Predicate) cb.equal(product.get("Luxury"), false));
        } else if (category.equals("2")) {
            predicates.add((Predicate) cb.equal(product.get("Trending"), false));
        }
        // add a list of predicates as query criteria
        if (!predicates.isEmpty()) {
            cq.where((jakarta.persistence.criteria.Predicate[]) predicates.toArray(new Predicate[0]));
            }
        
        // sort
        cq.orderBy(sortOrder);
        return em.createQuery(cq).getResultList();
    }

    public List<Product> applyFilter(int sortMode, String category) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'applyFilter'");
    }
}

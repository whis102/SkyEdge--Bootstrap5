package SkyEdge.repository;

import java.util.List;

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

    public List<Product> applyFilter(int sortMode, String category) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Product> cq = cb.createQuery(Product.class);
        Root<Product> product = cq.from(Product.class);
        Path<Object> sortColumn = product.get("name");

        if (sortMode == 2 || sortMode == 3) {
            sortColumn = product.get("name");
        }

        Order sortOrder = cb.desc(sortColumn);
        if (sortMode == 1 || sortMode == 2) {
            sortOrder = cb.asc(sortColumn);
        }

        // List<Predicate> predicates = new ArrayList<>();
        // // filtering by gender (0 means not filtered by gender)
        // if (category == "") {
        // predicates.add(cb.equal(product.get("male"), false));
        // } else if (gender == 2) {
        // predicates.add(cb.equal(product.get("male"), true));
        // }
        // // add a list of predicates as query criteria
        // if (!predicates.isEmpty()) {
        // cq.where(predicates.toArray(new Predicate[0]));
        // }
        // sort
        cq.orderBy(sortOrder);
        return em.createQuery(cq).getResultList();
    }
}

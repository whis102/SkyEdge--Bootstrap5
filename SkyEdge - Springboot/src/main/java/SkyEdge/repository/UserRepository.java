package SkyEdge.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import SkyEdge.model.MyUserDetails;

@Repository
public interface UserRepository extends JpaRepository<MyUserDetails, Integer> {
    Optional<MyUserDetails> findByUsername(String username);
}

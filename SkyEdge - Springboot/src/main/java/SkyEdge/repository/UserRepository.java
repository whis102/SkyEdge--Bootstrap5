package SkyEdge.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import SkyEdge.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findOneByUsernameIgnoreCase(String username);

    Optional<User> findByUsername(String username);

}

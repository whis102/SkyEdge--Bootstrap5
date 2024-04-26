// package SkyEdge.service;

// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import
// org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.stereotype.Service;

// import SkyEdge.model.User;
// import SkyEdge.repository.UserRepository;

// @Service
// public class JpaUserDetailsService implements UserDetailsService {
// @Autowired
// private UserRepository userRepo;
// @Override
// public UserDetails loadUserByUsername(String username)
// throws UsernameNotFoundException {

// Optional<User> user = userRepo.findByUsername(username);
// if (user.isPresent()) {
// return new SecurityUser(user.get());
// } else {
// throw new UsernameNotFoundException(
// "User not found: " + username
// );
// }
// }
// }

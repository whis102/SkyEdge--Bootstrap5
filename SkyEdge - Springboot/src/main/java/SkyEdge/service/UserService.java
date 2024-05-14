package SkyEdge.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import SkyEdge.model.User;
import SkyEdge.repository.UserRepository;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder encoder;

    // public User save(User user) {
    // // user.setPassword(passwordEncoder.encode(user.getPassword()));
    // return userRepository.save(user);
    // }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("In the user details service");

        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not valid"));
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

    public Long countByAuthorities() {
        return userRepository.count();
    }

    public Optional<User> findByToken(String token) {
        return userRepository.findByResetToken(token);
    }

    public User save(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        // if (user.getPhoto() == null) {
        // String path = photo_prefix.replace("**", "images/person.png");
        // user.setPhoto(path);
        // }

        return userRepository.save(user);
    }
}

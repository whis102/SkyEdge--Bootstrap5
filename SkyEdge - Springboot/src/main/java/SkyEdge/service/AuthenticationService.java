package SkyEdge.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import SkyEdge.model.MyUserDetails;
import SkyEdge.model.Role;
import SkyEdge.repository.RoleRepository;
import SkyEdge.repository.UserRepository;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class AuthenticationService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public MyUserDetails registerUser(String username, String password) {
        String encodedPassword = passwordEncoder.encode(password);
        Role userRole = roleRepository.findByAuthority("ADMIN").get();

        Set<Role> authorities = new HashSet<>();
        authorities.add(userRole);
        System.out.println("role added");
        return userRepository.save(new MyUserDetails(username, encodedPassword, authorities));
    }

}

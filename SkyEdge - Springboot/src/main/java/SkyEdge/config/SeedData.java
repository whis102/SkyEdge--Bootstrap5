package SkyEdge.config;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import SkyEdge.model.Role;
import SkyEdge.model.User;
import SkyEdge.repository.RoleRepository;
import SkyEdge.repository.SubscriberRepository;
import SkyEdge.repository.UserRepository;

@Component
public class SeedData implements CommandLineRunner {
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private SubscriberRepository subscriberRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (roleRepository.findByAuthority("USER").isEmpty()) {
            Role role = new Role();
            role.setAuthority("USER");
            roleRepository.save(role);
        }
        if (roleRepository.findByAuthority("ADMIN").isEmpty()) {
            Role role = new Role();
            role.setAuthority("ADMIN");
            roleRepository.save(role);
        }
        if (roleRepository.findByAuthority("SUPERADMIN").isEmpty()) {
            Role role = new Role();
            role.setAuthority("SUPERADMIN");
            roleRepository.save(role);
            Set<Role> authorities = new HashSet<>();
            authorities.add(role);
            userRepository.save(
                    new User("skyedgespringboot@gmail.com", "superadmin", passwordEncoder.encode("123456aA"),
                            authorities));
        }
    }

}

package SkyEdge.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import SkyEdge.model.Role;
import SkyEdge.repository.RoleRepository;

@Component
public class SeedData implements CommandLineRunner {
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {

        Optional<Role> adminRole = roleRepository.findByAuthority("ADMIN");
        Optional<Role> userRole = roleRepository.findByAuthority("USER");
        System.out.println(adminRole);
        if (adminRole.isEmpty()) {
            roleRepository.save(new Role("ADMIN"));
        }
        if (userRole.isEmpty()) {
            roleRepository.save(new Role("USER"));
        }

    }

}

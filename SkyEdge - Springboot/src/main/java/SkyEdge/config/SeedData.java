package SkyEdge.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import SkyEdge.model.Role;
import SkyEdge.repository.RoleRepository;
import SkyEdge.repository.SubscriberRepository;

@Component
public class SeedData implements CommandLineRunner {
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private SubscriberRepository subscriberRepository;

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
    }

}

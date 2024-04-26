package SkyEdge;

import java.util.HashSet;
import java.util.Set;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import SkyEdge.model.MyUserDetails;
import SkyEdge.model.Role;
import SkyEdge.repository.RoleRepository;
import SkyEdge.repository.UserRepository;

@SpringBootApplication
public class SkyEdgeApplication {

	public static void main(String[] args) {
		SpringApplication.run(SkyEdgeApplication.class, args);
	}

	@Bean
	CommandLineRunner run(RoleRepository roleRepository, UserRepository userRepository,
			PasswordEncoder passwordEncoder) {
		return args -> {
			if (roleRepository.findByAuthority("ADMIN").isPresent())
				return;
			Role adminRole = roleRepository.save(new Role(0, "ADMIN"));
			Role userRole = roleRepository.save(new Role(1, "USER"));

			Set<Role> roles = new HashSet<>();
			roles.add(adminRole);

			MyUserDetails admin = new MyUserDetails(1, "admin", passwordEncoder.encode("123456"), roles);
			System.out.println(roles);
			userRepository.save(admin);
			roles.add(userRole);
		};
	}
}

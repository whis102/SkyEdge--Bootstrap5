package SkyEdge.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class WebSecurityConfig {
        private static final String[] WHITELIST = {
                        "/",
                        "/login",
                        "/register",
                        "/resources/**",

        };

        @Bean
        public static PasswordEncoder passwordEncoder() {
                return new BCryptPasswordEncoder();
        }

        @Bean
        public AuthenticationManager authManager(UserDetailsService detailsService) {
                DaoAuthenticationProvider daoProvider = new DaoAuthenticationProvider();
                daoProvider.setUserDetailsService(detailsService);
                return new ProviderManager(daoProvider);
        }

        @Bean
        public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
                http
                                .authorizeHttpRequests(requests -> requests
                                                .requestMatchers(WHITELIST).permitAll()
                                                .requestMatchers("/").permitAll()
                                                .requestMatchers("/member/**").authenticated()
                                                .requestMatchers("/about/**").authenticated()
                                                .requestMatchers("/admin/**").hasRole("ADMIN"))
                                .formLogin(login -> login
                                                .loginPage("/login").loginProcessingUrl("/login")
                                                .usernameParameter("username").passwordParameter("password")
                                                .defaultSuccessUrl("/", true).failureUrl("/login?error")
                                                .permitAll())
                                .logout(logout -> logout.logoutUrl("/logout")
                                                .logoutSuccessUrl("/"))
                                .rememberMe(me -> me.rememberMeParameter("remember-me"));
                http.csrf(csrf -> csrf.disable());

                return http.build();
        }

}

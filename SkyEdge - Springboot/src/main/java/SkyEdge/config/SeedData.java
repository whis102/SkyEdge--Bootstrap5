// package SkyEdge.config;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.stereotype.Component;

// import SkyEdge.model.User;
// import SkyEdge.service.UserService;

// @Component
// public class SeedData implements CommandLineRunner {

// @Autowired
// private UserService userService;

// @Override
// public void run(String... args) throws Exception {

// User user01 = new User();
// User user02 = new User();

// user01.setEmail("ac01@mail.com");
// user01.setPassword("123456");
// user01.setName("user01");
// user01.setUsername("user01");

// user02.setEmail("ac02@mail.com");
// user02.setPassword("123456");
// user02.setName("user02");
// user02.setUsername("user02");

// userService.save(user01);
// userService.save(user02);

// }

// }

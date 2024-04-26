package SkyEdge.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// @Getter
// @Setter
// @Entity
// public class User {
// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
// private Long id;
// private String username;
// private String password;
// private String roles; // "ADMIN,USER,MOD"
// private String address;
// }
@Getter
@Setter
@Entity
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "username", length = 45, nullable = false)
    @NotEmpty(message = "Username missing")
    private String username;

    @Column(name = "password", length = 100, nullable = false)
    @NotEmpty(message = "Password missing")
    private String password;

    @Column(name = "email", length = 45, nullable = false)
    @NotEmpty(message = "Email missing")
    private String email;

    @Column(name = "name", length = 100, nullable = false)
    @NotEmpty(message = "Full Name missing")
    private String name;

    @Column(name = "phone", length = 100, nullable = true)
    private String phone;

    @Column(name = "createdDate", length = 1000, nullable = true)
    private LocalDate createdDate = LocalDate.now();

    private String role;
}

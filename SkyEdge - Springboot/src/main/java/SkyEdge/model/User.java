package SkyEdge.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class User {

    @Id
    @Column(name = "username", length = 45, nullable = false)
    private String username;

    @Column(name = "password", length = 100, nullable = false)
    private String password;

    @Column(name = "email", length = 45, nullable = false)
    private String email;

    @Column(name = "phone", length = 100, nullable = true)
    private String phone;

    @Column(name = "createdDate", length = 1000, nullable = true)
    private LocalDate createdDate = LocalDate.now();

    private String role;
}

package SkyEdge.security;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserTemplate {
    @Length(min = 6, max = 60)
    private String username;
    @Pattern(regexp = "^(?=.*\\d)(?=.*[A-Z]).{6,60}$", message = "6 chars min (at least 1" +
            "digit & 1 uppercase letter)")
    private String password;
    // getter & setter methods
}

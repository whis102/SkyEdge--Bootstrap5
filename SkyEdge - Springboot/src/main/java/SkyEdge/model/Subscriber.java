package SkyEdge.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.ArrayList;
import java.util.List;


@Getter
@Setter
@Entity
@NoArgsConstructor
public class Subscriber {
    @Id
    private String subscriberEmail;

    public Subscriber(String subscriberEmail) {
        this.subscriberEmail = subscriberEmail;
    }

    public static List<Subscriber> fromArray(Object[] subscriberData) {
        List<Subscriber> subscribers = new ArrayList<>();
        for (Object data : subscriberData) {
            if (data instanceof String) {
                Subscriber subscriber = new Subscriber((String) data);
                subscribers.add(subscriber);
            }
        }
        return subscribers;
    }
}
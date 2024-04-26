package SkyEdge.model;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


public class MyUserDetails implements UserDetails {
    private User user;
    public MyUserDetails(User user) { this.user = user; }
    @Override
    public String getUsername() { return user.getUsername(); }
    @Override
    public String getPassword() { return user.getPassword(); }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    // create & return a List<GrantedAuthority> from roles
    }
    @Override
    public boolean isAccountNonExpired() { return true; }
    @Override
    public boolean isAccountNonLocked() { return true; }
    @Override
    public boolean isCredentialsNonExpired() { return true; }
    @Override
    public boolean isEnabled() { return true; }
    }
    
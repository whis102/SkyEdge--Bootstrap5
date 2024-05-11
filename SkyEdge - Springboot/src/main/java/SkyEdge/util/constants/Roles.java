package SkyEdge.util.constants;

public enum Roles {
    USER("ROLE_USER"), ADMIN("ROLE_ADMIN"), SUPERADMIN("ROLE_SUPERADMIN");

    private String role;

    private Roles(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }
}

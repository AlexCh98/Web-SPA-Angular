package com.example.padelversus.user;

import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

@Component
//@SessionScope
public class UserComponent {

    private User user;

    public User getLoggedUser() {
        return user;
    }

    public void setLoggedUser(User user) {
        this.user = user;
    }

    public boolean isLoggedUser() {
        return this.user != null;
    }

    public boolean isAdmin() {
        return user != null && user.getRoles() != null && user.getRoles().contains("ROLE_ADMIN");
    }

}

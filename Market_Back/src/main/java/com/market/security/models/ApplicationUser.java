package com.market.security.models;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.market.app.dataModels.Region;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name="users")
@Getter
@Setter
public class ApplicationUser implements UserDetails{

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer userId;
    @Column(unique=true)
    private String username;
    private String password;
    private String mobileNumber;
    private String address;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "region_id")
    private Region region;

     @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;


    @ManyToMany(fetch=FetchType.EAGER)
    @JoinTable(
            name="user_role_junction",
            joinColumns = {@JoinColumn(name="user_id")},
            inverseJoinColumns = {@JoinColumn(name="role_id")}
    )
    private Set<Role> authorities;

    public ApplicationUser() {
        super();
        authorities = new HashSet<>();
    }


    public ApplicationUser(Integer userId, String username, String password, Set<Role> authorities ,String mobileNumber, String address,Region region ) {
        super();
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.authorities = authorities;
        this.mobileNumber = mobileNumber;
        this.address = address;
        this.region = region;

    }



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
         return this.authorities;
    }

    @Override
    public String getPassword() {
         return this.password;
    }



    @Override
    public String getUsername() {
         return this.username;
    }



     @Override
    public boolean isAccountNonExpired() {
         return true;
    }

    @Override
    public boolean isAccountNonLocked() {
         return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
         return true;
    }

    @Override
    public boolean isEnabled() {
         return true;
    }



}

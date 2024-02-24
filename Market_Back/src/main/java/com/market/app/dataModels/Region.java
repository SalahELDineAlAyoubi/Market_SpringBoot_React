package com.market.app.dataModels;

import com.market.security.models.ApplicationUser;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "regions")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Region {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "region_id")
    private Integer id;
    @Column(name = "region_name")
    private String name;

    @OneToMany(mappedBy = "region")
    private List<ApplicationUser> users;


    public Region(Integer id, String name) {
        this.id = id;
        this.name = name;
    }
}


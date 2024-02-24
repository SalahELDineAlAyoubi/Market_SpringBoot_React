package com.market;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import com.market.app.dataModels.Region;
import com.market.app.repositories.RegionRepository;
import com.market.security.models.ApplicationUser;
import com.market.security.models.Role;
import com.market.security.repository.RoleRepository;
import com.market.security.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import org.springframework.security.crypto.password.PasswordEncoder;



@SpringBootApplication
public class MarketApplication {

	public static void main(String[] args) {
		SpringApplication.run(MarketApplication.class, args);
	}


	@Bean
	CommandLineRunner run(RoleRepository roleRepository, RegionRepository regionRepository, UserRepository userRepository, PasswordEncoder passwordEncode){
		return args ->{
			if(roleRepository.findByAuthority("ADMIN").isPresent()) return;
			Role adminRole = roleRepository.save(new Role("ADMIN"));
			roleRepository.save(new Role("USER"));

			Set<Role> roles = new HashSet<>();
			roles.add(adminRole);


 		Region region1 = new Region(1, "Palmera");
			Region region2 = new Region(2, "Khezzen");
			Region region3 = new Region(3, "Arid");
			Region region4 = new Region(4, "Vilal");
			Region region5 = new Region(5, "SPA");
			Region region6 = new Region(6, "Seha");
			Region region7 = new Region(7, "Kalim");
			Region region8 = new Region(8, "Zeki");
			Region region9 = new Region(9, "Krami");
			ApplicationUser admin = new ApplicationUser(1, "admin", passwordEncode.encode("password"), roles,null,null,null);

			regionRepository.saveAll(Arrays.asList(region1,
					         region2, region3,region4,region5,region6,region7,region8,region9));


 			userRepository.save(admin);
		};
	}


}

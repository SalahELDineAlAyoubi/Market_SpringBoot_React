package com.market.security.services;


import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import com.market.app.dataModels.Region;
import com.market.app.repositories.RegionRepository;
import com.market.security.models.ApplicationUser;
import com.market.security.models.LoginResponseDTO;
import com.market.security.models.Role;
import com.market.security.repository.RoleRepository;
import com.market.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
 import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service
@Transactional
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;
 @Autowired
    private RegionRepository regionRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    public ApplicationUser registerUser(String username, String password,String mobileNumber, String address ){

        String encodedPassword = passwordEncoder.encode(password);
        Role userRole = roleRepository.findByAuthority("USER").get();

        Set<Role> authorities = new HashSet<>();
         authorities.add(userRole);

        String regionName = address.split(",")[0].trim();
        Optional<Region> region = regionRepository.findByName(regionName);
        ApplicationUser  newUser =     new ApplicationUser(0, username, encodedPassword, authorities,mobileNumber,address,region.get());
        return userRepository.save(newUser);
    }

    public LoginResponseDTO loginUser(String username, String password){

        try{
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password)
            );

            String token = tokenService.generateJwt(auth);

            return new LoginResponseDTO(userRepository.findByUsername(username).get(), token);

        } catch(AuthenticationException e){
            return new LoginResponseDTO(null, "");
        }
    }

}

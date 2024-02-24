package com.market.app.controllers;


import com.market.app.dataModels.Region;
import com.market.app.dto.Response.RegionDtoResponse;
import com.market.app.services.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/regions")
public class RegionController {
    @Autowired
    private RegionService regionService;


    @GetMapping("")
    public List<RegionDtoResponse> getAllRegions(){
        return regionService.getAllRegions();
    }


    @GetMapping("get-region/{regionId}")

    public ResponseEntity<?> getRegion(@PathVariable("regionId") Integer regionId){

        var result =  regionService.getRegionById(regionId);
        if(result != null) {
            return ResponseEntity.ok(result);
        }
      else   return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Region Not Found");

    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("add-region/{regionName}")
    public  ResponseEntity<?>  addRegion( @PathVariable("regionName") String regionName){

        var result =  regionService.addRegion(regionName);
        if(result != null) {
            return ResponseEntity.ok(result);
        }
        else   return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Region already Exist");


    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("delete-region/{regionId}")
    public  ResponseEntity<?>  addRegion( @PathVariable("regionId") Integer regionId){

        var result =  regionService.deleteRegion(regionId);
        if(result != null) {
            return ResponseEntity.ok(result);
        }
        else   return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Region Not Found");
    }
}

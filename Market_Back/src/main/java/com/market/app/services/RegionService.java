package com.market.app.services;

import com.market.app.Mappers.RegionMapper;
import com.market.app.dataModels.Region;
import com.market.app.dto.Response.RegionDtoResponse;
import com.market.app.exceptions.AlreadyExistException;
import com.market.app.exceptions.NotFoundException;
import com.market.app.repositories.RegionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RegionService {
    @Autowired
    private RegionRepository regionRepo ;
    @Autowired

    private  RegionMapper regionMapper;

    public List<RegionDtoResponse> getAllRegions (){

        List<Region> all = this.regionRepo.findAll();
            return this.regionMapper.toDTOs(all);
    }


    public RegionDtoResponse getRegionById(Integer regionId) {
        Optional<Region> reg = regionRepo.findById(regionId);
        if (reg.isPresent()) {
            return regionMapper.toDto(reg.get());
        } else {
            throw new NotFoundException("region not found - "+ regionId);
        }

    }

    public List<RegionDtoResponse> deleteRegion(Integer regionId) {
         Optional<Region> region = regionRepo.findById(regionId);

        if (region.isEmpty()) {
            return null ;
         }

        regionRepo.delete(region.get());

        return this.getAllRegions();
    }


    public RegionDtoResponse addRegion(String regionName) {
        Optional<Region> existingRegion = regionRepo.findByName(regionName);

        if (existingRegion.isPresent()) {
            throw new AlreadyExistException("Region already exist with this name : "+ regionName);
        }

        Region entity = new Region();
        entity.setName(regionName);
        regionRepo.save(entity);

        return regionMapper.toDto(entity);
    }



}

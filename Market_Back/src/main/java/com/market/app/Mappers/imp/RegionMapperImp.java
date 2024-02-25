package com.market.app.Mappers.imp;

import com.market.app.Mappers.RegionMapper;
import com.market.app.dataModels.Region;
import com.market.app.dto.Response.RegionDtoResponse;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component

public class RegionMapperImp implements RegionMapper {


    @Override
    public RegionDtoResponse toDto(Region entity) {
        if ( entity == null ) {
            return null;
        }
        RegionDtoResponse regionDtoResponse = new RegionDtoResponse();
        regionDtoResponse.setId(entity.getId());
        regionDtoResponse.setName(entity.getName());
        return regionDtoResponse;
    }

    @Override
    public List<RegionDtoResponse> toDTOs(List<Region> entities) {
        if ( entities == null ) {
            return null;
        }
        List<RegionDtoResponse> list = new ArrayList<RegionDtoResponse>( entities.size() );
        for ( Region product : entities ) {
            list.add( toDto( product ) );
        }

        return list;
    }
}

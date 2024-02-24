package com.market.app.Mappers;
import com.market.app.dataModels.Region;
import com.market.app.dto.Response.RegionDtoResponse;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")

public interface RegionMapper {
    RegionDtoResponse toDto(Region entity);
    List<RegionDtoResponse> toDTOs(List<Region> entities);

}

import React from "react";
import Typography from "../../base/Typography/Typography";
import Badge from "../../base/Badge/Badge";
import MapSearch from "../../base/MapSearch/MapSearch";
import SelectDropdown from "../../base/SelectDropdown/SelectDropdown";
import style from "./filter.module.css";
import useMediaQuery from "../../../utils/useMediaQuery";

const Filter = ({
  sortHighHandler,
  sortLowHandler,
  sortHigh,
  sortLow,
  onChange,
  options,
  placeholder,
  screenSize,
}) => {
  console.log(screenSize);
  return (
    <div className={screenSize ? style.filterWrapperFlex : style.filterWrapper}>
      <div>
        <Typography color="white" variant="h4-graphik-bold">
          Sort By
        </Typography>
        <div className={style.badgeContainer}>
          <Badge
            label="Price - High to Low"
            onClick={sortHighHandler}
            active={sortHigh}
          />
          <Badge
            label="Price - Low to High"
            onClick={sortLowHandler}
            active={sortLow}
          />
        </div>
      </div>
      <div>
        <Typography color="white" variant="h4-graphik-bold">
          Location
        </Typography>
        <div className={style.mapContainer}>
          <MapSearch />
        </div>
      </div>
      <div>
        <Typography color="white" variant="h4-graphik-bold">
          Category
        </Typography>
        <div className={style.selectContainer}>
          <SelectDropdown
            options={options}
            placeholder={placeholder}
            clearable
            backspaceDelete
            onChange={onChange}
            searchable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;

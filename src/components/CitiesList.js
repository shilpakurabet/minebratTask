/** @format */

import React from "react";

const CitiesList = ({ cities, setData, data }) => {
  // HANLDE CITY LIST CHANGE
  const hanldeChange = (e) => {
    setData({
      ...data,
      selectedCity: e.target.value,
    });
  };

  return (
    <div>
      <select className="dropdown" onChange={(e) => hanldeChange(e)}>
        <option> Select City </option>
        {cities?.map((item) => {
          return <option key={item.cityId}> {item.cityName} </option>;
        })}
      </select>
    </div>
  );
};

export default CitiesList;

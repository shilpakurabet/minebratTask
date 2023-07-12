/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import CitiesList from "./CitiesList";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();

  // HANDLE STATE
  const [states, setstates] = useState([]);
  const [cities, setCities] = useState(null);
  const [data, setData] = useState({
    selectedState: "",
    selectedCity: "",
  });

  // GET STATES DATA FROM API
  const getStates = async () => {
    try {
      const response = await axios.get("http://api.minebrat.com/api/v1/states");
      const result = await response.data;
      setstates(result);
    } catch (error) {
      console.log(error);
    }
  };

  // GET CITY LIST BY SELECTED STATE ID
  const getCity = async (stateId) => {
    try {
      const response = await axios.get(
        `http://api.minebrat.com/api/v1/states/cities/${stateId}`
      );
      const result = await response.data;
      setCities(result);
    } catch (error) {
      console.log(error);
    }
  };

  // HANDLE STATE LIST CHANGE
  const handleChange = (e) => {
    setData({
      ...data,
      selectedState: e.target.selectedOptions[0].text,
    });
    const stateId = e.target.value;
    if (stateId) {
      getCity(e.target.value);
    } else alert("Please select state");
  };

  useEffect(() => {
    getStates();
  }, []);
  return (
    <div>
      <select onChange={handleChange} className="dropdown">
        <option value={""}> Select State </option>
        {states?.map((item) => {
          return (
            <option key={item.stateId} value={item.stateId}>
              {" "}
              {item?.stateName}{" "}
            </option>
          );
        })}
      </select>
      {/* {data?.selectedState && (
        <CitiesList cities={cities} setData={setData} data={data} />
      )} */}
      <CitiesList cities={cities} setData={setData} data={data} />
      <button
        className="submit"
        type="button"
        onClick={() => navigate("/result", { state: data })}>
        {" "}
        submit{" "}
      </button>
    </div>
  );
};

export default List;

import React from "react";
import { Link } from "react-router-dom";

//Work here\\

const responseErrorInvalidCity = {
    status: "error",
    message: "Invalid city format. Please provide a valid city name.",
    data: null,
  };
  
  const responseErrorCityNotFound = {
    status: "error",
    message: "City not found. Please check the city name and try again.",
    data: null,
  };
  
  const responseErrorNoPetFriendlyPlaces = {
    status: "error",
    message: "No pet-friendly places found in the specified city.",
    data: null,
  };
  
  const responseErrorInternalServer = {
    status: "error",
    message: "An internal server error occurred. Please try again later.",
    data: null,
  };
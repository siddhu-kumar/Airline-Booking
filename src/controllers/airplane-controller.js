import { StatusCodes } from "http-status-codes";
import { Airplaneservice } from "../services/index.js";
import { SuccessResponse, ErrorResponse } from "../utils/common/index.js";

/*
 * POST : /airplanes
 * req-body { modelNumber: 'airbus320', capacity: 200 }
 */

export const createAirplane = async (req, res) => {
  try {
    const airplane = await Airplaneservice.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

export const getAirplanes = async (req, res) => {
  try {
    const airplanes = await Airplaneservice.getAirplanes();
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch(error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);  
  }
}
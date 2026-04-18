import { StatusCodes } from "http-status-codes";
import { Cityservice } from "../services/index.js";
import { SuccessResponse, ErrorResponse } from "../utils/common/index.js";

/*
 * POST : /cities
 * req-body { name: 'London' }
 */

export const createCity = async (req, res) => {
  try {
    const city = await Cityservice.createCity({
      name: req.body.name
    });
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};
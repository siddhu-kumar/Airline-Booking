import { StatusCodes } from "http-status-codes";
import { CityRepository } from "../repositories/index.js";
import { AppError } from "../utils/errors/app-error.js";

const cityRepository = new CityRepository();

export const createCity = async (data) => {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {    
    if (error.name === "SequelizeValidationError" || error.name === 'SequelizeUniqueConstraintError') {
      let explanation = [];
      error.errors.forEach((error) => {
        explanation.push( error.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new City Obejct",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
}
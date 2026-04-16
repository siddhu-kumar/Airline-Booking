import { StatusCodes } from "http-status-codes";
import { AirplaneRepository } from "../repositories/index.js";
import { AppError } from "../utils/errors/app-error.js";

const airplaneRepository = new AirplaneRepository();

export const createAirplane = async (data) => {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((error) => {
        explanation.push(error.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new Airplane Obejct",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
};

export const getAirplanes = async () => {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch(error) {
    throw new AppError(
      "Cannot fetch data of all the Airplane ",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
}
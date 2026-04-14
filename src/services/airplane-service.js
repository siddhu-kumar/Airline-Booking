import { StatusCodes } from 'http-status-codes';
import { AirplaneRepository } from '../repositories/index.js'
import { AppError } from '../utils/errors/app-error.js';

const airplaneRepository = new AirplaneRepository();

export const createAirplane = async (data) => {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane
  } catch (error) {
    console.log(error);
    if(error.name == 'TypeError') {
      throw new AppError('Cannot create a new Airplane Obejct', StatusCodes.INTERNAL_SERVER_ERROR);
    }
    throw error;
  }
}
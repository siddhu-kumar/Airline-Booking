import { StatusCodes } from "http-status-codes";
import { ErrorResponse } from "../utils/common/index.js";

export const validateCreateRequest = (req, res, next) => {
  if (!req.body.modelNumber) {

    ErrorResponse.message = "Something went wrong while creating airplane";
    ErrorResponse.error = {
        explanation:
          "Model number not found in the incoming request in correct form",
      }
    return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
  }
  next();
};

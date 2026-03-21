import { StatusCodes } from "http-status-codes";

const info = (req, res) => {
  return req.status(StatusCodes.OK).json({
    success: true,
    message: 'API is live',
    error: {},
    data: {}
  })
}

export const InfoController = info;
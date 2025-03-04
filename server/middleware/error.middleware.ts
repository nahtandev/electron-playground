import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

const errorConfig = {
  defaultCode: "INTERNAL_SERVER_ERROR",
  defaultStatus: 500,
  defaultMessage:
    "Internal server error. An internal server error has occurred.",
};

export const makeErrorHandler = (logger: any): ErrorRequestHandler => {
  return (err: any, req: Request, res: Response, next: NextFunction) => {
    let response: any = { success: false };

    const errorCode = err.code || errorConfig.defaultCode;
    const errorMessage = err.message || errorConfig.defaultMessage;

    // Get headers, body from request
    logger.error({
      err: err,
      req: {
        headers: req.headers,
        body: req.body,
      },
    });

    response = {
      ...response,
      status: err.status || errorConfig.defaultStatus,
      error: {
        code: errorCode,
        message: errorMessage,
      },
    };

    res.status(response.status).json(response);
  };
};

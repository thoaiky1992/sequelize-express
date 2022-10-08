import Joi from "joi";

function ValidationMiddleware(schema) {
  return async (req, res, next) => {
    const validationOptions = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    };

    try {
      const value = await schema.validateAsync({ body: req.body }, validationOptions);
      req.body = value.body;
      next();
    } catch (e) {
      const errors = [];
      console.log(e);
      e.details.forEach((error) => {
        errors.push(error.message);
      });
      res.status(400).send({ message: "Bad request !!!", errors: errors });
    }
  };
}

export default ValidationMiddleware;

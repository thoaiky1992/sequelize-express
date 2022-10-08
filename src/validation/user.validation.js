import Joi from "joi";
export const UserValidation = {
  create: Joi.object({
    body: {
      userName: Joi.string().max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    },
  }),
};

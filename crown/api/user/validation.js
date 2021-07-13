import Joi from "joi";

const email = Joi.string().email();
const password = Joi.string().min(8).max(255).required();
const firstName = Joi.string().min(3).required();
const lastName = Joi.string().min(2).required();
const number = Joi.number();
const hobbies = Joi.array().items(Joi.string());
const location = Joi.string().min(10);
const role = Joi.string().allow("admin", "moderator").required();

const createField = {
  firstName,
  lastName,
  number,
  email,
  password,
  hobbies,
  location,
};
export const userCreateSchema = Joi.object(createField);
export const adminUserCreateSchema = Joi.object({ ...createField, role });

const updateFields = {
  firstName,
  lastName,
  number,
  email,
  hobbies,
  location,
};

export const userUpdateSchema = Joi.object(updateFields).fork(
  Object.keys(updateFields),
  (attributes) => attributes.optional()
);

export const loginSchema = Joi.object({
  email,
  password,
});

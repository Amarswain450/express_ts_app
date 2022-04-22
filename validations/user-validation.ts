import { body } from "express-validator";

export const registrationValidation = [
    body('name').not().isEmpty().withMessage("Name is required"),
    body('email').not().isEmpty().withMessage("Email is required"),
    body('password').not().isEmpty().withMessage("Password is required")
]
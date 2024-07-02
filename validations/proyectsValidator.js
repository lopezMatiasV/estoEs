const { body, param, validationResult } = require("express-validator");
const { Proyect } = require("../database/models");

const name = body("name")
	.exists()
	.withMessage("Param required")
	.notEmpty()
	.withMessage("Not empty")
	.isString()
	.withMessage("Must be a string");

const description = body("description")
	.exists()
	.withMessage("Param required")
	.notEmpty()
	.withMessage("Not empty")
	.isString()
	.withMessage("Must be a string");

const proyectManager = body("proyectManager")
	.exists()
	.withMessage("Param required")
	.notEmpty()
	.withMessage("Not empty")
	.isString()
	.withMessage("Must be a string");

const assignedTo = body("assignedTo")
	.exists()
	.withMessage("Param required")
	.notEmpty()
	.withMessage("Not empty")
	.isString()
	.withMessage("Must be a string");

const status = body("status")
	.exists()
	.withMessage("Param required")
	.notEmpty()
	.withMessage("Not empty")
	.isString()
	.withMessage("Must be a string");

const validation = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	next();
};
const idParam = param("id")
	.exists()
	.withMessage("Param required")
	.isInt()
	.withMessage("Must be a integer")
	.custom(function (value) {
		return Proyect.findOne({ where: { id: value } }).then((result) => {
			if (!result) {
				return Promise.reject(`Entity with id:${value} doesn't exists`);
			}
		});
	});

module.exports = {
	validatorCreate: [
		name,
		description,
		proyectManager,
		assignedTo,
		status,
		validation,
	],
	validatorRemove: [idParam, validation],
	validatorGetOne: [idParam, validation],
	validatorUpdate: [
		idParam,
		name,
		description,
		proyectManager,
		assignedTo,
		status,
		validation,
	],
};

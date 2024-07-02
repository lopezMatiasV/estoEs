const { Router } = require("express");

const { getAll, getById, create, editById, deleteById, searchProyect } = require('../controllers/proyectsController');
const { validatorCreate, validatorGetOne, validatorUpdate, validatorRemove } = require("../validations/proyectsValidator")
const proyectRouter = new Router();

proyectRouter
    .get("/", getAll)
    .get("/search", searchProyect)
    .get("/:id", validatorGetOne, getById)
    .post("/", validatorCreate, create)
    .put("/:id", validatorUpdate, editById)
    .delete("/:id", validatorRemove, deleteById);

module.exports = proyectRouter;

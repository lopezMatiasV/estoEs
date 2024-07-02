const proyectsRepository = require("../repositories/proyectsRepository");
const { paginate } = require("../utils/paginate");

const getAll = async (req) => {
	try {
        const lengthResult = 5;
		const proyects = await paginate(proyectsRepository.getAll, req, lengthResult);
		return proyects;
	} catch (error) {
		throw error;
	}
};

const getById = async (id) => {
	try {
		const proyect = await proyectsRepository.getById(id);
		if (proyect) return proyect;
		const error = new Error("not found");
		error.name = "not found";
		error.entity = { name: "Proyects", key: "id", keyValue: id };
		return [null, error];
	} catch (error) {
		throw error;
	}
};

const create = async (data) => {
	try {
		const newProyect = await proyectsRepository.create(data);
		return newProyect;
	} catch (error) {
		throw error;
	}
};

const editById = async (id, data) => {
	try {
		const proyect = await proyectsRepository.getById(id);
		if (!proyect) {
			const error = new Error("not found");
			error.name = "not found";
			error.entity = { name: "Proyects", key: "id", keyValue: id };
			return [null, error];
		}
		const updateProyect = await proyectsRepository.editById(id, data);
		return updateProyect;
	} catch (error) {
		throw error;
	}
};

const deleteById = async (id) => {
	try {
		const proyect = await proyectsRepository.getById(id);
		if (!proyect) {
			const error = new Error("not found");
			error.name = "not found";
			error.entity = { name: "Proyects", key: "id", keyValue: id };
			return [null, error];
		}
		await proyectsRepository.deleteById(id);
		return;
	} catch (error) {
		throw error;
	}
};

const searchProyect = async (search) => {
	try {
		const result = await proyectsRepository.searchProyect(search);
		if (result) return result;
		const error = new Error("Not result");
		error.name = "not found";
		error.entity = { name: "Proyects", key: "name", keyValue: name };
		return [null, error];
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getAll,
	getById,
	create,
	editById,
	deleteById,
	searchProyect,
};

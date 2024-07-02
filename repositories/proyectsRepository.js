const { Proyect } = require("../database/models");
const { Op } = require("sequelize");

const getAll = async (offset, limit) => {
	try {
		const proyects = await Proyect.findAndCountAll({offset, limit});
		return proyects;
	} catch (error) {
		throw error;
	}
};

const getById = async (id) => {
	try {
		const proyect = await Proyect.findByPk(id);
		return proyect;
	} catch (error) {
		throw error;
	}
};

const create = async (data) => {
	try {
		const newProyect = await Proyect.create(data);
		return newProyect;
	} catch (error) {
		throw error;
	}
};

const editById = async (id, data) => {
	try {
		await Proyect.update(data, { where: { id: id } });
        const proyectEdit = Proyect.findByPk(id)
        return proyectEdit
	} catch (error) {
		throw error;
	}
};

const deleteById = async (id) => {
	try {
		return await Proyect.destroy({ where: { id: id } });
	} catch (error) {
		throw error;
	}
};

const searchProyect = async (search) => {
	try {
		const result = await Proyect.findAll({
			where: {
				[Op.or]: [{ name: { [Op.substring]: search } }],
			},
		});
		return result;
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

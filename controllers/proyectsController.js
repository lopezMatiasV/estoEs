const proyectsServices = require("../services/proyectsServices");

const getAll = async (req, res) => {
	try {
		const proyects = await proyectsServices.getAll(req);
		return res.status(200).json({
			length: proyects.length,
			data: proyects,
		});
	} catch (error) {
		throw error;
	}
};

const getById = async (req, res) => {
	try {
        const { id } = req.params;
		const proyect = await proyectsServices.getById(id);
		return res.status(200).json({
			data: proyect,
		});
	} catch (error) {
		throw error;
	}
};

const create = async (req, res) => {
	try {
		const newProyect = await proyectsServices.create(req.body);
        console.log(newProyect);
		return res.status(201).json({
			msg: "Created succesfully",
			data: newProyect,
		});
	} catch (error) {
		throw error;
	}
};

const editById = async (req, res) => {
	try {
		const { id } = req.params;
		const data = req.body;
		const updateProyect = await proyectsServices.editById(id, data);
        console.log(updateProyect);
		return res.status(200).json({
			msg: "Updated succesfully",
            data: updateProyect
		});
	} catch (error) {
		throw error;
	}
};

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await proyectsServices.deleteById(id)
        return res.status(200).json({
			msg: "Deleted succesfully",
		});
    } catch (error) {
        throw error;
    }
};
const searchProyect = async (req, res) => {
    try {
        const search = req.query.name.toLowerCase()
        const result = await proyectsServices.searchProyect(search)
        return res.status(200).json({
            data: result,
        })
    } catch (error) {
        throw error
    }
}

module.exports = { getAll, getById, create, editById, deleteById, searchProyect };

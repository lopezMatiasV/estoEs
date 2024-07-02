module.exports = (sequelize, dataTypes) => {
	let alias = "Proyect";
	let cols = {
		id: {
			type: dataTypes.BIGINT(10).UNSIGNED,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: dataTypes.STRING(100),
			allowNull: false,
		},
		description: {
			type: dataTypes.STRING(500),
			allowNull: false,
		},
		proyectManager: {
			type: dataTypes.STRING(100),
			allowNull: false,
		},
		assignedTo: {
			type: dataTypes.STRING(100),
			allowNull: false,
		},
		status: {
			type: dataTypes.STRING(100),
			allowNull: false,
		},
	};
	let config = {
		tableName: "proyects",
		timestamps: false,
	};
	const Proyect = sequelize.define(alias, cols, config);
	return Proyect;
};

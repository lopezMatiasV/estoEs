const express = require("express");
const swaggerUiExpress = require("swagger-ui-express");
const swaggerDocs = require("swagger-jsdoc");

const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8080;

const proyectRouter = require("./routes/proyectsRoutes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	return res.json({
		status: "running",
		date: new Date(),
		pid: process.pid,
	});
});
app.use("/api/proyects", proyectRouter);

const swaggerOptions = {
	definition: {
		openapi: "3.0.1",
		info: {
			title: "Documentación de adoptme",
			description: "API para gestión proyectos",
		},
	},
	apis: [`./docs/**/*.yaml`],
};

const specs = swaggerDocs(swaggerOptions);
app.use("/api/docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));
app.listen(port, () => {
	console.log(`Server listening in port ${port}`);
});

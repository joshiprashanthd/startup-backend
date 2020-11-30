import { ApolloServer } from "apollo-server-express";
import express from "express";

//local
import { TypeDefs, Resolvers } from "./entities";
import SchemaDirectives from "./entities/customDirectives";
import session from "./session";
import dataloaders from "./dataloaders";
import routes from "./routes";
import { IContext } from "./types";
import { NodeConfig } from "./config";
import cors from "cors";

export default async function () {
	const app = express();

	const origin =
		process.env.NODE_ENV === "production"
			? "https://yourcollab.netlify.app"
			: "http://localhost:8080";

	app.disable("x-powered-by");
	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
		res.header(
			"Access-Control-Allow-Headers",
			"Content-Type, Authorization, Content-Length, X-Requested-With"
		);

		// intercept OPTIONS method
		if ("OPTIONS" == req.method) {
			res.send(200);
		} else {
			next();
		}
	});
	// app.use(
	// 	cors({
	// 		origin,
	// 		credentials: true
	// 	})
	// );
	app.use(session);
	app.use("/", routes);

	const server = new ApolloServer({
		typeDefs: TypeDefs,
		resolvers: Resolvers,
		schemaDirectives: SchemaDirectives,
		playground:
			NodeConfig.nodeEnvironment === "production"
				? false
				: {
						settings: {
							"request.credentials": "include"
						}
				  },
		context: async ({ req, res }): Promise<IContext> => {
			return {
				req,
				res,
				dataloaders
			};
		}
	});

	server.applyMiddleware({
		app,
		cors: {
			credentials: true,
			origin
		}
	});

	app.listen({ port: process.env.PORT || 4000 }, () => {
		console.log(`[SERVER] ready at http://localhost:4000${server.graphqlPath}`);
	});
}

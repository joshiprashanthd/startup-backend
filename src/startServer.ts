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

export default async function () {
	const app = express();

	if (NodeConfig.nodeEnvironment === "production") app.set("trust proxy", 1);

	app.disable("x-powered-by");
	app.use("/", routes);
	app.use(session);

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

	const origin =
		process.env.NODE_ENV === "production"
			? "https://yourcollab.netlify.app"
			: "http://localhost:8080";

	console.log("Origin : ", origin);

	server.applyMiddleware({
		app,
		cors: {
			credentials: true,
			origin: origin
		}
	});

	app.listen({ port: process.env.PORT || 4000 }, () => {
		console.log(`[SERVER] ready at http://localhost:4000${server.graphqlPath}`);
	});
}

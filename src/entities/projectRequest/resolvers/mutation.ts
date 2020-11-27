//local
import { ApolloError, AuthenticationError } from "apollo-server-express";
import { IContext } from "../../../types";
import { Project } from "../../project/model";
import { mapProjectRequest } from "../mapper";
import { ProjectRequest } from "../model";
import {
	IProjectRequestDocument,
	ProjectRequestStatusEnum
} from "../model/types";

export default {
	Mutation: {
		toggleRequestProject: async (
			parent: any,
			args: { message: string; projectId: string },
			context: IContext,
			info: any
		) => {
			const oldRequest = await ProjectRequest.findOne({
				from: context.req.session.userId,
				to: args.projectId
			});

			if (oldRequest) {
				await oldRequest.deleteOne((err, raw) => {
					if (err) throw new ApolloError(err);
				});

				return false;
			}

			const project = await Project.findById(args.projectId);

			if (
				project.details.creator.toString() ===
				context.req.session.userId.toString()
			)
				throw new ApolloError("You cannot request your own project.");

			await ProjectRequest.create<Partial<IProjectRequestDocument>>({
				from: context.req.session.userId,
				to: args.projectId,
				status: ProjectRequestStatusEnum.PENDING,
				message: args.message.length === 0 ? null : args.message
			});

			return true;
		},

		acceptProjectRequest: async (
			parent: any,
			args: { projectRequestId: string },
			context: IContext,
			info: any
		) => {
			const projectRequest = await ProjectRequest.findById(
				args.projectRequestId
			);
			const project = await Project.findById(projectRequest.to);

			if (
				project.details.creator.toString() !==
				context.req.session.userId.toString()
			)
				throw new AuthenticationError(
					"Your are not allowed to accept this request."
				);

			if (projectRequest.status === ProjectRequestStatusEnum.ACCEPTED)
				throw new ApolloError("Request is already accepted.");

			const result = await ProjectRequest.findByIdAndUpdate(
				projectRequest.id,
				{
					status: ProjectRequestStatusEnum.ACCEPTED
				},
				{ new: true }
			);

			await project.updateOne({ $push: { "work.team": result.from } });

			return mapProjectRequest(result, context);
		}
	}
};

import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { JobFunctionModel } from "./base";

export class JobFunctionCreate extends D1CreateEndpoint<HandleArgs> {
  _meta = {
    model: JobFunctionModel,
    fields: JobFunctionModel.schema.pick({
      name: true,
      slug: true,
      description: true,
      active: true,
    }),
  };
}

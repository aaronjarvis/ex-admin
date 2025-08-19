import { D1UpdateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { JobFunctionModel } from "./base";

export class JobFunctionUpdate extends D1UpdateEndpoint<HandleArgs> {
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

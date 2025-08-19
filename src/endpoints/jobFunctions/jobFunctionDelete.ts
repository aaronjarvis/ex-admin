import { D1DeleteEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { JobFunctionModel } from "./base";

export class JobFunctionDelete extends D1DeleteEndpoint<HandleArgs> {
  _meta = {
    model: JobFunctionModel,
  };
}

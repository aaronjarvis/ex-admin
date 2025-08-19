import { D1ReadEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { JobFunctionModel } from "./base";

export class JobFunctionRead extends D1ReadEndpoint<HandleArgs> {
  _meta = {
    model: JobFunctionModel,
  };
}

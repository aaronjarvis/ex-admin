import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { JobFunctionModel } from "./base";

export class JobFunctionList extends D1ListEndpoint<HandleArgs> {
  _meta = {
    model: JobFunctionModel,
  };

  searchFields = ["name", "slug", "description"];
  defaultOrderBy = "id DESC";
}

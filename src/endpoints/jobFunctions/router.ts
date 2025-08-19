import { Hono } from "hono";
import { fromHono } from "chanfana";
import { JobFunctionList } from "./jobFunctionList";
import { JobFunctionCreate } from "./jobFunctionCreate";
import { JobFunctionRead } from "./jobFunctionRead";
import { JobFunctionUpdate } from "./jobFunctionUpdate";
import { JobFunctionDelete } from "./jobFunctionDelete";

export const jobFunctionsRouter = fromHono(new Hono());

jobFunctionsRouter.get("/", JobFunctionList);
jobFunctionsRouter.post("/", JobFunctionCreate);
jobFunctionsRouter.get("/:id", JobFunctionRead);
jobFunctionsRouter.put("/:id", JobFunctionUpdate);
jobFunctionsRouter.delete("/:id", JobFunctionDelete);

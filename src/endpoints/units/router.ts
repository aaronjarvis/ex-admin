import { Hono } from "hono";
import { fromHono } from "chanfana";
import { UnitList } from "./unitList";
import { UnitCreate } from "./unitCreate";
import { UnitRead } from "./unitRead";
import { UnitUpdate } from "./unitUpdate";
import { UnitDelete } from "./unitDelete";

export const unitRouter = fromHono(new Hono());

unitRouter.get("/", UnitList);
unitRouter.post("/", UnitCreate);
unitRouter.get("/:id", UnitRead);
unitRouter.put("/:id", UnitUpdate);
unitRouter.delete("/:id", UnitDelete);

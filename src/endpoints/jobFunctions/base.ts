import { z } from "zod";

export const jobFunction = z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  active: z.boolean(),
  created_at: z.string().datetime().optional(),
  updated_at: z.string().datetime().optional(),
});

export const JobFunctionModel = {
  tableName: "job_functions",
  primaryKeys: ["id"],
  schema: jobFunction,
  serializer: (obj: Record<string, string | number | boolean>) => {
    return {
      ...obj,
      active: Boolean(obj.active),
    };
  },
  serializerObject: jobFunction,
};

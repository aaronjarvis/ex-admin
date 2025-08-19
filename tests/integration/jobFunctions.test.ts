import { SELF } from "cloudflare:test";
import { beforeEach, describe, expect, it } from "vitest";

async function createJobFunction(data: any) {
  const response = await SELF.fetch(`http://local.test/job-functions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const body = await response.json<{ success: boolean; result: { id: number } }>();
  return body.result.id;
}

describe("Job Functions CRUD", () => {
  beforeEach(async () => {
    // No-op per-test setup; migrations run globally
  });

  it("should create, list, read, update, and delete a job function", async () => {
    // Create
    const id = await createJobFunction({
      name: "Registered Nurse",
      slug: "rn",
      description: "Provides direct patient care.",
      active: true,
    });

    // Read
    const readRes = await SELF.fetch(`http://local.test/job-functions/${id}`);
    const readBody = await readRes.json();
    expect(readRes.status).toBe(200);
    expect(readBody.result.name).toBe("Registered Nurse");

    // List
    const listRes = await SELF.fetch(`http://local.test/job-functions`);
    const listBody = await listRes.json();
    expect(listRes.status).toBe(200);
    expect(Array.isArray(listBody.result)).toBe(true);
    expect(listBody.result.find((r:any) => r.id === id)).toBeTruthy();

    // Update
    const updRes = await SELF.fetch(`http://local.test/job-functions/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: "Provides patient care and coordination." }),
    });
    const updBody = await updRes.json();
    expect(updRes.status).toBe(200);
    expect(updBody.result.description).toContain("coordination");

    // Delete
    const delRes = await SELF.fetch(`http://local.test/job-functions/${id}`, { method: "DELETE" });
    const delBody = await delRes.json();
    expect(delRes.status).toBe(204);
    expect(delBody.success).toBe(true);
  });

  it("returns 404 on non-existent job function", async () => {
    const res = await SELF.fetch(`http://local.test/job-functions/999999`);
    const body = await res.json();
    expect(res.status).toBe(404);
    expect(body.success).toBe(false);
  });
});

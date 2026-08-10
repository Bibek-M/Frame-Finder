import { identifyMovie } from "./identifyMovie";

Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);

    if (req.method === "POST" && url.pathname === "/api/identify") {
      const formData = await req.formData();
      const file = formData.get("image") as File | null;

      if (!file) {
        return Response.json({ error: "No image provided" }, { status: 400 });
      }

      const buffer = await file.arrayBuffer();
      const result = await identifyMovie(buffer, file.type); // <--- Called here

      return Response.json(result);
    }

    return new Response("Not Found", { status: 404 });
  },
});

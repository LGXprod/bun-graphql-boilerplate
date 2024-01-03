const PORT = 3000;
const NODE_ENV = process.env.NODE_ENV ?? "development";

console.log(PORT, NODE_ENV);

const server = Bun.serve({
  port: PORT,
  fetch() {
    return new Response("Welcome to Bun!");
  },
});

console.log(`[${NODE_ENV}] Serving http://localhost:${server.port}`);

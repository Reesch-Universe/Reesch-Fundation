import Fastify from "fastify";
import { registerRoutes } from "./infrastructure/http/routes/index.js";

async function main() {
  const fastify = Fastify({ logger: true });
  const PORT = parseInt(process.env.PORT || "5000");

  await registerRoutes(fastify);

  fastify.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
    if (err) throw err;
    console.log(`🚀 Reesch Universe running on ${address}`);
  });
}

main().catch(console.error);

import Fastify from "fastify";

const fastify = Fastify({ logger: true });
const PORT = parseInt(process.env.PORT || "3000");

fastify.get("/health", async (request, reply) => {
  return { status: "alive" };
});

fastify.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
  if (err) throw err;
  console.log(`🚀 Reesch Universe running on ${address}`);
});

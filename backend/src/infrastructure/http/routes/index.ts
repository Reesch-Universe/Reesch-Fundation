import type { FastifyInstance } from "fastify";
import { dashboardRoutes } from "./dashboard.routes.js";
import { gameRoutes } from "./game.routes.js";
import { healthRoutes } from "./health.routes.js";

export async function registerRoutes(fastify: FastifyInstance) {
  await dashboardRoutes(fastify);
  await gameRoutes(fastify);
  await healthRoutes(fastify);
}

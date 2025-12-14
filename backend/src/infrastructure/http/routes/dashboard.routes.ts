import type { FastifyInstance } from "fastify";
import { DashboardController } from "../../../adapters/controllers/Dashboard/DashboardController.js";
import { GetDashboardUseCase } from "../../../domain/usecases/GetDashboardUseCase.js";

export async function dashboardRoutes(fastify: FastifyInstance) {
    const getDashboardUseCase = new GetDashboardUseCase();
    const dashboardController = new DashboardController(getDashboardUseCase);

    fastify.get('/dashboard', (request, reply) => dashboardController.getDashboard(request, reply));
}
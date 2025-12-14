import type { FastifyRequest, FastifyReply } from 'fastify';
import { GetDashboardUseCase } from "../../../domain/usecases/GetDashboardUseCase.js";

export class DashboardController {
    constructor(private getDashboardUseCase: GetDashboardUseCase) {}

    async getDashboard(request: FastifyRequest, reply: FastifyReply) {
        const dashboard = await this.getDashboardUseCase.execute();
        reply.send(dashboard);
    }
}